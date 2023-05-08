import { Module } from "@nestjs/common";
import { SystemService } from "./system.service";
// import { UserController } from "src/user/user.controller";

@Module({
    providers:[SystemService], // 可注入
    exports:[SystemService], // 可抛出
    // controllers:[UserController]
})
export class SharedModule {

}