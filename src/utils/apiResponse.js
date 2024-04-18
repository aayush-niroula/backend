class ApiResponse{
    constructor(Statuscode,data,message ="Sucesss"){
        this.Statuscode= Statuscode
        this.data=data
        this.message=message
        this.success=Statuscode

    }
}
export {ApiResponse}
