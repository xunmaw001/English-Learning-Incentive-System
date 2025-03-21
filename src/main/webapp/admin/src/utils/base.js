const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm65k27/",
            name: "ssm65k27",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm65k27/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "微信小程序的英语学习激励系统"
        } 
    }
}
export default base
