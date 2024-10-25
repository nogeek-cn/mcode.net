// 居中的 div
let div_center_before = "<div style='" +
    " justify-content: center;" +
    " align-items: center;" +
    " display: flex;" +
    " display: -webkit-flex;" +
    " margin: 0 auto;'>";
let div_center_after = "</div>";

// title 的渐变色
let gradient_title_span_before = "<span style='" +
    "padding-top: 8px; padding-bottom: 8px; " +
    "font-size: 32px;" +
    "background: var(--vp-home-hero-name-background);" +
    "-webkit-background-clip: text;" +
    "background-clip: text; " +
    "-webkit-text-fill-color: var(--vp-home-hero-name-color); '>";
let gradient_title_span_after = "</span>";

// 字体的渐变色
let gradient_span_before = "<span style=' "
    + "background: var(--vp-home-hero-name-background) ;"
    + "-webkit-background-clip: text;"
    + "background-clip: text; "
    + "-webkit-text-fill-color: var(--vp-home-hero-name-color); '>";
let gradient_span_after = "</span>";


export default {
    homeFeatureList: [
        [
            {
                "title":
                    div_center_before +
                    gradient_title_span_before +
                    "mock-everything" +
                    gradient_title_span_after +
                    div_center_after +
                    "<br/> " +
                    " ✅ 集成： <font style='color: var(--vp-c-text-2)'> Spring 框架 </font> " + "<br/>"
                    + " ✅ 时间： <font style='color: var(--vp-c-text-2)'> 任意时间</font> " + "<br/>"
                    + " ✅ 限制： <font style='color: var(--vp-c-text-2)'> 不依赖任何第三方组件，测试自己的流程 </font> <br/>"
                    + " ✅ 做法： <font style='color: var(--vp-c-text-2)'> 任意一个类都可以进行 Mock </font> <br/>"
                    + " ✅ 目标： <font style='color: var(--vp-c-text-2)'> 提升本地集成测试的不完善问题 </font> <br/>"
                ,
                "details": "",
                "link": "",
                "linkText": ""
            },
            {
                "title":
                    div_center_before +
                    gradient_title_span_before +
                    "primary-instance" +
                    gradient_title_span_after +
                    div_center_after +
                    "<br/> " +
                    "✅ 环境：<font style='color: var(--vp-c-text-2)'> 分布式环境 </font> " + "<br/>"
                    + " ✅ 限流： <font style='color: var(--vp-c-text-2)'>调用二方或三方有速率限制 </font> " + "<br/>"
                    + " ✅ 选择器： <font style='color: var(--vp-c-text-2)'>基于策略选择其中一台机器去执行本地任务 </font> " + "<br/>"
                    + " ✅ 故障： <font style='color: var(--vp-c-text-2)'> 机器下线、故障做故障迁移 </font> " + "<br/>"
                    + " ✅ 内存队列： <font style='color: var(--vp-c-text-2)'> 基于内存队列实现永动 </font> " + "<br/>"
                ,
                "details": "",
                "link": "",
                "linkText": ""
            }
        ],
        [
            {
                "title":
                    div_center_before +
                    gradient_title_span_before +
                    "memory-elastic-task" +
                    gradient_title_span_after +
                    div_center_after +
                    "<br/> " +
                    "✅ 依赖：<font style='color: var(--vp-c-text-2)'> 依赖 `primary-instance`做内存偏向 </font> " + "<br/>"
                    + " ✅ 环境： <font style='color: var(--vp-c-text-2)'> 多台机器的做单机任务执行 </font> " + "<br/>"
                    + " ✅ 弹性： <font style='color: var(--vp-c-text-2)'> 基于内存实现任务队列的弹性伸缩 </font> " + "<br/>"
                    + " ✅ 优先级： <font style='color: var(--vp-c-text-2)'> 可以实现人工优先自动等 </font> " + "<br/>"
                    + " ✅ 通知： <font style='color: var(--vp-c-text-2)'> 不同任务的快速通知，启动 </font> " + "<br/>"
                    + " ✅ 循环周期： <font style='color: var(--vp-c-text-2)'> 内存的任务实现永动循环 </font> "
                ,
                "details": "",
                "link": "",
                "linkText": ""
            },
            {
                "title":
                    div_center_before +
                    gradient_title_span_before +
                    "daily-increment-no" +
                    gradient_title_span_after +
                    div_center_after +
                    "<br/> " +
                    "✅ 环境：<font style='color: var(--vp-c-text-2)'> 分布式 </font> " + "<br/>"
                    + " ✅ 目标： <font style='color: var(--vp-c-text-2)'> 每日自增号段 </font> " + "<br/>"
                    + " ✅ 特点： <font style='color: var(--vp-c-text-2)'> 高性能 </font> " + "<br/>"
                    + " ✅ 特点： <font style='color: var(--vp-c-text-2)'> 高可用 </font> " + "<br/>"
                    + " ✅ 特点： <font style='color: var(--vp-c-text-2)'> 每日自动归零自增 </font> " + "<br/>"
                ,
                "details": "",
                "link": "",
                "linkText": ""
            }
        ],
        [
            {
                "title":
                    div_center_before +
                    gradient_title_span_before +
                    "DDD-view" +
                    gradient_title_span_after +
                    div_center_after +
                    "<br/> " +
                    "✅ 管控等级：<font style='color: var(--vp-c-text-2)'> 关闭、监控、控制 </font> " + "<br/>"
                    + " ✅ 注解驱动： <font style='color: var(--vp-c-text-2)'> 划分 Bean 的职责，禁用 @Compontent 和 @Service </font> " + "<br/>"
                    + " ✅ 全新注解： <font style='color: var(--vp-c-text-2)'> @RemoteProvider、@RemoteConsumer ... </font> " + "<br/>"
                    + " ✅ 监控模式： <font style='color: var(--vp-c-text-2)'> 所有 Bean 的依赖关系，动态生成依赖图谱 </font> " + "<br/>"
                    + " ✅ 管控模式： <font style='color: var(--vp-c-text-2)'> 违规的 Bean 的依赖关系，将会抛出错误 </font> "
                ,
                "details": "",
                "link": "",
                "linkText": ""
            },
            {
                "title":
                    div_center_before +
                    gradient_title_span_before +
                    "aliyun-migrate-utils" +
                    gradient_title_span_after +
                    div_center_after +
                    "<br/> " +
                    "✅ 背景：<font style='color: var(--vp-c-text-2)'> 整个阿里云设施迁移到另一个阿里云设施 </font> " + "<br/>"
                    + " ✅ 数据完整： <font style='color: var(--vp-c-text-2)'> 无损迁移 </font> " + "<br/>"
                    + " ✅ 用户体验： <font style='color: var(--vp-c-text-2)'> 无感切换以及迁移 </font> "
                ,
                "details": "",
                "link": "",
                "linkText": ""
            },
        ],
        [

            {
                "title":
                    div_center_before +
                    gradient_title_span_before +
                    "orm-core" +
                    gradient_title_span_after +
                    div_center_after +
                    "<br/> " +
                    "✅ 做法：<font style='color: var(--vp-c-text-2)'> 实现字段名字与字段的函数对应关系的映射 </font> " + "<br/>"
                    + " ✅ 转化： <font style='color: var(--vp-c-text-2)'> 将字段的函数 转化为 对象的字段名字 </font> " + "<br/>"
                    + " ✅ 目标： <font style='color: var(--vp-c-text-2)'> 对接所有 java 代码手写字段名的条件拼接 </font> " + "<br/>"
                    + " ✅ 愿景： <font style='color: var(--vp-c-text-2)'> 给所有的 手动拼接字段名称的 ORM 框架 提供内核整合</font> "
                ,
                "details": "",
                "link": "",
                "linkText": ""
            },
            {
                "title":
                    div_center_before +
                    gradient_title_span_before +
                    "business-archetype" +
                    gradient_title_span_after +
                    div_center_after +
                    "<br/> " +
                    "✅ 使用：<font style='color: var(--vp-c-text-2)'> 业务脚手架 </font> " + "<br/>"
                    + " ✅ 目标： <font style='color: var(--vp-c-text-2)'> 一秒构建出来一个基于 DDD 模式的微服务项目 </font> "
                ,
                "details": "",
                "link": "",
                "linkText": ""
            },


        ],
        [

            {
                "title":
                    div_center_before +
                    gradient_title_span_before +
                    "bury-dots" +
                    gradient_title_span_after +
                    div_center_after +
                    "<br/> " +
                    "✅ 使用：<font style='color: var(--vp-c-text-2)'> 业务埋点 </font> " + "<br/>"
                    + " ✅ 目标： <font style='color: var(--vp-c-text-2)'> 统一的埋点文件分离 </font> " + "<br/>"
                    + " ✅ 格式： <font style='color: var(--vp-c-text-2)'> Json 格式 或 分隔符分隔 </font> "
                ,
                "details": "",
                "link": "",
                "linkText": ""
            },
            {
                "title":
                    div_center_before +
                    gradient_title_span_before +
                    "web-sign" +
                    gradient_title_span_after +
                    div_center_after +
                    "<br/> " +
                    "✅ 网关签名：<font style='color: var(--vp-c-text-2)'> 自动签名 </font> " + "<br/>"
                    + " ✅ 签名： <font style='color: var(--vp-c-text-2)'> RSA非对称加密 </font> " + "<br/>"
                    + " ✅ 幂等： <font style='color: var(--vp-c-text-2)'> 基于请求做幂等处理 </font> " + "<br/>"
                    + " ✅ 加密： <font style='color: var(--vp-c-text-2)'> 某些敏感自动做自动加密 </font> "
                ,
                "details": "",
                "link": "",
                "linkText": ""
            },
        ],
        [
            {
                "title":
                    div_center_before +
                    gradient_title_span_before +
                    "aop-log" +
                    gradient_title_span_after +
                    div_center_after +
                    "<br/> " +
                    "✅ 日志：<font style='color: var(--vp-c-text-2)'> 动态调控日志开关 </font> " + "<br/>"
                    + " ✅ 日志分层： <font style='color: var(--vp-c-text-2)'> 基于协议层、服务提供者、服务调用者、缓存、数据库等进行多日志文件的分离日志文件 </font> " + "<br/>"
                    + " ✅ 过滤： <font style='color: var(--vp-c-text-2)'> 日志过长的截取 </font> " + "<br/>"
                    + " ✅ 优先级： <font style='color: var(--vp-c-text-2)'> 自定义参数、返回值是否打印的单个控制与全局控制 </font> "
                ,
                "details": "",
                "link": "",
                "linkText": ""
            },
            {
                "title":
                    div_center_before +
                    gradient_title_span_before +
                    "prevent-resubmit" +
                    gradient_title_span_after +
                    div_center_after +
                    "<br/> " +
                    "✅ 使用：<font style='color: var(--vp-c-text-2)'> 防止重复提交 </font> " + "<br/>"
                    + " ✅ 依赖： <font style='color: var(--vp-c-text-2)'> Spring EL 表达式、Lock </font> " + "<br/>"
                    + " ✅ 使用： <font style='color: var(--vp-c-text-2)'> 快速实现业务的防止重复提交 </font> "
                ,
                "details": "",
                "link": "",
                "linkText": ""
            },

        ]


    ],
}