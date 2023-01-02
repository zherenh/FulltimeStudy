import * as cdk from 'aws-cdk-lib';
import {Construct} from 'constructs';
import {Code, Function, Runtime} from "aws-cdk-lib/aws-lambda";
import * as api from '@aws-cdk/aws-apigatewayv2-alpha'
import {HttpMethod} from '@aws-cdk/aws-apigatewayv2-alpha'

import {HttpLambdaIntegration} from '@aws-cdk/aws-apigatewayv2-integrations-alpha';



export class TsprjStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);


        //define lambda
        let handler = new Function(this, "ldb_favorite_food", {
            runtime: Runtime.NODEJS_18_X,
            code: Code.fromAsset("resources"),
            handler: "handler.handler",
            functionName: "favorite_food",
        });



        //define http api gateway
        const httpApi = new api.HttpApi(this, 'api_favorite_food',
            {
                apiName:"favorite_food",
                createDefaultStage:true
            }
        );
        httpApi.addRoutes({
            path:"/favorite_food",
            methods:[HttpMethod.ANY],
            integration:new HttpLambdaIntegration('food_handler', handler)
        })



    }
}

