import os
import json
import logging
import boto3
from botocore.exceptions import ClientError
from boto3.dynamodb.conditions import Key

IMAGES_BUCKET = os.getenv('STORAGE_DEVHOME_BUCKETNAME')
ALLOW_CITY_IMAGES = ['newyork.jpg', 'newyork2.jpg', 'lima1.jpg',
                     'lima2.jpg', 'lima3.jpg', 'toronto.jpg', 'sanfrancisco.jpg', 'bangkog.jpg']


def build_response(body):
    """ Build Response Function """
    response = {
        "statusCode": 200,
        "body": json.dumps(body),
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }

    return response


def create_presigned_url(bucket_name, object_name, expiration=3600):
    """ Create PreSigned URL """
    s3_client = boto3.client('s3')
    try:
        response = s3_client.generate_presigned_url(
            'get_object',
            Params={
                'Bucket': bucket_name,
                'Key': object_name
            },
            ExpiresIn=expiration
        )
    except ClientError as err:
        logging.error(err)
        return None

    # The response contains the presigned URL
    return response


def handler(event, context):
    """ Main Handler function """
    print('received event:')
    print(event)
    query_parameters = event['queryStringParameters']

    if 'cityimage' not in query_parameters:
        body = {'Message': 'Error: missing parameters'}
        return build_response(body)

    image = query_parameters['cityimage']

    if image not in ALLOW_CITY_IMAGES:
        body = {'Message': 'Failed, image not allowed'}
        return build_response(body)

    records = {}

    image_key = 'images/%s' % image

    rpm_signed_url = create_presigned_url(
        IMAGES_BUCKET,
        image_key,
        '20'
    )

    records['rpmSignedUrl'] = rpm_signed_url

    body = {
        'Items': records
    }

    response = build_response(body)

    print(json.dumps(response, indent=2))

    return response
