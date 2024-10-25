import {defineConfig} from 'vitepress'
import AutoNav from 'vite-plugin-vitepress-auto-nav'

import {biliSvg, umlCnSvg, telegramSvg} from './util';

export default defineConfig({
    // 阿里云 CDN 不支持 cleanUrls
    cleanUrls: false,
    sitemap: {
        hostname: "https://mcode.net",
        lastmodDateOnly: false
    },
    head: [
        ['link', {rel: 'manifest', href: '/pwa/manifest.json'}],
        ['link', {rel: 'icon', href: '/NoGeekAvatar.png'}],
        ['script', {src: '/js/rewrite.js'}],
        // ['script', {src: '/sw-registration.js'}],
        // ['script', {src: '/snackbar.js'}]
    ],

    title: '不止极客',
    description: '始于极客，不止极客｜educode｜educode.cn|nogeek|nogeek.cn｜CTO|架构师｜后端组长｜创业者｜高并发｜高性能｜高可用|技术合伙人｜架构咨询',
    lang: 'zh-cmn-Hans',
    base: '/',
    // 忽略解析部分md文件（默认忽略node_modules），仅打包后生效，被忽略的文件不影响被其他文件导入
    srcExclude: ['**/(README|TODO).md', '(.vitepress|public|images|.guthub|components|snippets|else-exclude|sh)/**/*.md'],
    lastUpdated: true,
    markdown: {
        lineNumbers: true,
        defaultHighlightLang: 'js',
    },
    vite: {
        plugins: [
            AutoNav({
                itemsSetting: {
                    'REWRITE_TO_UMLCN.md': {title: '❤UMLCN❤  ↗ ↗ '},
                    'std.md': {hide: true},
                    '能力象限.md': {hide: true},
                    '401': {hide: true},
                    'products.md': {title: '付费产品'},
                    '联系我购买.md': {hide: true},
                    '联系我': {hide: true}
                },
            }),
        ],
    },
    rewrites: {
    },
    themeConfig: {
        logo: '/favicon.ico',
        outline: 'deep',
        outlineTitle: '目录',
        socialLinks: [
            {icon: 'github', link: 'https://github.com/nogeek-cn'},
            {icon: 'x', link: 'https://x.com/noGeek_cn'},
            {icon: {svg: biliSvg}, link: "https://space.bilibili.com/392517565"},
            {icon: {svg: umlCnSvg}, link: 'https://umlcn.com'},
        ],
        // editLink: {
        //     pattern: 'https://github.com/nogeek-cn/mcode.net/edit/master/:path',
        //     text: '修改本文',
        // },
        footer: {
            message:
                '<a href="http://educode.cn" target="_blank" style="color: #337ab7; text-decoration: underline">educode.cn</a>&nbsp &nbsp' +
                '<a href="http://codeedu.cn" target="_blank" style="color: #337ab7; text-decoration: underline">codeedu.cn</a>&nbsp &nbsp' +
                '<a href="http://notgeek.cn" target="_blank" style="color: #337ab7; text-decoration: underline">notgeek.cn</a>&nbsp &nbsp' +
                '<br/>' +
                '<br/> Released under the MIT License.',
            copyright: 'Copyright © 2023-present ' +
                '<a href="http://nogeek.cn" target="_blank" style="color: #337ab7; text-decoration: underline"> noGeek.cn </a> <br/>' +
                '<a href="https://beian.miit.gov.cn/" target="_blank" style="color: #337ab7;"> 豫ICP备20012533号-1 </a> '
        },
        docFooter: {
            prev: '上一篇',
            next: '下一篇',
        },
        darkModeSwitchLabel: '切换主题',
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '回到顶部',
        langMenuLabel: '切换语言',
        lastUpdatedText: '更新时间',
        externalLinkIcon: true,
    },

    transformPageData(pageData) {
        pageData.frontmatter.head ??= []
        pageData.frontmatter.head.push([
            'meta',
            {
                name: 'keywords',
                content: `${pageData.title} | 不止极客,nogeek,educode,教育编程,编程教育|Java基础, 多线程, JVM, 虚拟机, 数据库, MySQL, Spring, Redis, MyBatis, 系统设计, 分布式, RPC, 高可用, 高并发`
            }
        ]);

        pageData.frontmatter.head.push([
            'meta',
            {
                name: 'og:type',
                content: 'website'
            }
        ]);
        pageData.frontmatter.head.push([
            'meta',
            {
                name: 'og:site_name',
                content: '不止极客'
            }
        ]);
        pageData.frontmatter.head.push([
            'meta',
            {
                name: 'og:image',
                content: 'https://nogeek.cn/NoGeekAvatar.png'
            }
        ]);
        pageData.frontmatter.head.push([
            'meta',
            {
                name: 'twitter:image',
                content: 'https://nogeek.cn/NoGeekAvatar.png'
            }
        ]);
        pageData.frontmatter.head.push([
            'meta',
            {
                name: 'og:title',
                content:
                    pageData.frontmatter.layout === 'home'
                        ? `不止极客`
                        : `${pageData.title} | 不止极客`
            }
        ]);

        // 百度搜索
        pageData.frontmatter.head.push([
            'meta',
            {
                name: 'baidu-site-verification',
                content: 'codeva-FB5idg7Tyk'
            }
        ]);
        // bing 搜索
        pageData.frontmatter.head.push([
            'meta',
            {
                name: 'msvalidate.01',
                content: '9F2D57CFC59E8031212A166878638B15'
            }
        ]);
    },
})
