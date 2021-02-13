import Index from "../../components/Index";
import Head from "../../components/Head";
import Into from "../../components/Into";
import ButtonItem from "../../components/ButtonItem";

function User(props) {
    return (
        <div className="user-main">
            <Head title="我的账号" isBack={ false }/>
            <div className="user-logo">
                <img src="/images/logo.png" />
                <span>Web前端组</span>
            </div> 
            <div className="global-hr"></div>
            <Into title="昵称" text="12121"/>
            <Into title="邮箱" text="igaoxian@foxmail.com" isBack={ false } status={ false }/>
            <Into title="修改密码" />
            <Into title="退出分组" />
            <ButtonItem text="退出登陆" className="user"/>
            <Index active="2"/>
        </div>
    )
}

export default User;