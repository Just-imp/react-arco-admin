import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as packageConfig from '../package.json'
export const generateDocment = app => {
    const options = new DocumentBuilder()
        .setTitle(packageConfig.name)
        .setDescription(packageConfig.description)
        .setVersion(packageConfig.version)
        .addBearerAuth() //jwt token鉴权
        .build()

    const docment = SwaggerModule.createDocument(app, options)
    
    SwaggerModule.setup('/api/doc', app, docment)
}