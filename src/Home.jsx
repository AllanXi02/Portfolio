import "./Home.css";

function Home() {
  return (
    <div className="home" aria-label="home of Rose" >
       
      <h2 className="home__title" > Current Intro - Project and goals</h2>
      <div className="home__content">
        <img
          src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
          alt="leanging rose in glass"
          className="home__image"
        />
        <p className="home__description">
        Yue XI 生平介绍:
目前来说 还有是 两个问题 - footer 的命名✅ 准确 route✅ - 主题颜色格式变化  - (在有的就是一个Rose界面的换名和不增加dropdown的原因和方法✅)
        <p>✅Project - Link1 作为前沿爱好兴趣项目展示✅ </p>
        <p> 注册界面Goals - Link2删除 ✅取代为 :未来 gains 和take away✅ </p>
        最后的Rose界面可以作为一个另外的传统项目展示 如RPC 和微服务, 以及图像识别, 包括 各种比较酷炫的UI设置. 和目前在做的事情进度.
         </p>
      </div>
    </div>
  );
}


export default Home;
