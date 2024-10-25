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
                // 表情包 https://emojikeyboard.io/travel-places
                "title": div_center_before +
                    gradient_title_span_before +
                    "不止极客的由来" +
                    gradient_title_span_after +
                    div_center_after +
                    "<br/> " +
                    "✅ 我跟你讲一个北京话，叫做“没有金刚钻，不揽瓷器活”。我们有前瞻性吗？我们有，我们没有，我活不到今天。 --段永平波士堂 <br/>"+
                    "✅ 做正确的事情，比把事情做对更重要。 --段永平 <br/>"+
                    "✅ 不止极客的灵感来源：无码科技 nocode.com <br/>" +
                    "✅ 你问我技术强不强，如果不够强，那些结果我肯定拿不到。但是，我认为成功需要的不止是技术强，所以取名为：" +
                    gradient_span_before + "不止极客" + gradient_span_after + "<br/>",
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
                    "能力象限" +
                    gradient_title_span_after +
                    div_center_after +
                    "<br/> " +
                    " ✅ 技术： <font style='color: var(--vp-c-text-2)'> 处理技术本身和业务在技术侧遇到的问题 </font> <br/> " +
                    " ✅ 产品： <font style='color: var(--vp-c-text-2)'> 优化用户体验、提升运营效率 </font> <br/> " +
                    " ✅ 管理： <font style='color: var(--vp-c-text-2)'> 搭建核心技术团队、提高凝聚力 </font> <br/> " +
                    " ✅ 商业： <font style='color: var(--vp-c-text-2)'> 深刻理解并在技术侧落地实施落地公司的商业战略</font> ",
                "details": "",
                "link": "能力象限.html",
                "linkText": ""
            },
            {
                "title":
                    div_center_before +
                    gradient_title_span_before +
                    "工作成果" +
                    gradient_title_span_after +
                    div_center_after +
                    "<br/> " +
                    "✅ 支付宝：<font style='color: var(--vp-c-text-2)'> 一次晋升、两次加薪；年度质量硬核郎；程序性能最优 </font> <br/> " +
                    "✅ 婚礼纪：<font style='color: var(--vp-c-text-2)'> 项目的性能与体验得到 CEO 和使用者的大力好评 </font> <br/> " +
                    "✅ 原与宙：<font style='color: var(--vp-c-text-2)'> 作为技术负责人带领公司成为数字藏品行业第一 </font> ",
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
                    "华与华的原则" +
                    gradient_title_span_after +
                    div_center_after +
                    "<br/> " +
                    "✅ 给钱就干，不给钱就不干 <br/>" +
                    "✅ 什么时候给钱什么时候干 <br/>" +
                    "✅ 什么时候开始拖欠，什么时候停止干 <br/>"
                ,
                "details": "",
                "link": "",
                "linkText": ""
            },
            {
                "title":
                    div_center_before +
                    gradient_title_span_before +
                    "stop doing list" +
                    gradient_title_span_after +
                    div_center_after +
                    "<br/> " +
                    "✅ 不作恶 <br/>" +
                    "✅ 不投机取巧 <br/>" +
                    "✅ 不和不专业的人聊专业 <br/>"
                ,
                "details": "",
                "link": "/std.html",
                "linkText": ""
            }
        ],


    ],
}