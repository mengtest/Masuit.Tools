import{_ as e,c as a,o as t,V as r}from"./chunks/framework.cYNwvFF8.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"myblogs.md","filePath":"myblogs.md","lastUpdated":null}'),i={name:"myblogs.md"},s=r('<h3 id="masuit-myblogs" tabindex="-1">Masuit.MyBlogs <a class="header-anchor" href="#masuit-myblogs" aria-label="Permalink to &quot;Masuit.MyBlogs&quot;">​</a></h3><p><a href="https://gitee.com/masuit/Masuit.MyBlogs"><img src="https://gitee.com/static/images/logo-black.svg" height="32"></a> <a href="https://github.com/ldqk/Masuit.MyBlogs"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/54px-Font_Awesome_5_brands_github.svg.png" height="32"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/GitHub_logo_2013.svg/128px-GitHub_logo_2013.svg.png" height="32"></a><br><strong>重要提醒：OneDrive功能将于2024.6.30进行移除处理，如果你正在使用本项目，请尽快完成OneDrive迁移到alist或其他网盘挂载程序</strong></p><p>个人博客站项目源码，高性能高安全性低占用的博客系统，这也许是我写过的性能最高的web项目了。<strong>仅3MB的代码量！</strong> 目前日均处理请求数80-600w次，同时在线活跃用户数60-600人，<strong>数据量累计已达到数百万条</strong>，数据库+Redis+网站主程序同时运行在一台4核8GB的机器上，浏览器页面请求秒级响应，CPU平均使用率控制在10%左右，内存占用控制在400MB左右。 <img src="https://img11.360buyimg.com/ddimg/jfs/t1/170269/23/18655/93697/6076eb8fE82d545e7/78f0815f7311cd49.png" alt="任务管理器"><img src="https://user-images.githubusercontent.com/20254980/206615289-fa975ddc-4534-47f8-9d80-d8ab637b0157.png" alt="image"></p><p><img src="https://user-images.githubusercontent.com/20254980/129124476-88a324ac-cfd2-4e9b-8fb9-e84e12d04051.png" alt="image"></p><h3 id="演示站点" tabindex="-1">演示站点 <a class="header-anchor" href="#演示站点" aria-label="Permalink to &quot;演示站点&quot;">​</a></h3><p>测试站点1：<a href="https://masuit.org" target="_blank" rel="noreferrer">https://masuit.org</a>，测试站点2：<a href="https://masuit.com" target="_blank" rel="noreferrer">https://masuit.com</a>，测试站点3：<a href="https://ldqk.xyz" target="_blank" rel="noreferrer">https://ldqk.xyz</a></p><p><a href="https://github.com/996icu/996.ICU/blob/master/LICENSE" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/license-Anti%20996-blue.svg" alt="LICENSE"></a> <img src="https://img.shields.io/github/languages/code-size/ldqk/Masuit.MyBlogs.svg" alt="codeSize"> <img src="https://img.shields.io/github/languages/top/ldqk/Masuit.MyBlogs.svg" alt="language"></p><h3 id="请注意" tabindex="-1">请注意： <a class="header-anchor" href="#请注意" aria-label="Permalink to &quot;请注意：&quot;">​</a></h3><p>一旦使用本开源项目以及引用了本项目或包含本项目代码的公司因为违反劳动法（包括但不限定非法裁员、超时用工、雇佣童工等）在任何法律诉讼中败诉的，一经发现，本项目作者有权利追讨本项目的使用费（<strong>公司工商注册信息认缴金额的2-5倍作为本项目的授权费</strong>），或者直接不允许使用任何包含本项目的源代码！任何性质的<code>外包公司</code>或<code>996公司</code>需要使用本类库，请联系作者进行商业授权！其他企业或个人可随意使用不受限。996那叫用人，也是废人。8小时工作制才可以让你有时间自我提升，将来有竞争力。反对996，人人有责！</p><h2 id="star趋势" tabindex="-1">Star趋势 <a class="header-anchor" href="#star趋势" aria-label="Permalink to &quot;Star趋势&quot;">​</a></h2><img src="https://starchart.cc/ldqk/Masuit.MyBlogs.svg"><h3 id="前端请求支援" tabindex="-1">前端请求支援 <a class="header-anchor" href="#前端请求支援" aria-label="Permalink to &quot;前端请求支援&quot;">​</a></h3><p>目前网站前端页面的代码比较零乱，到处都是，大家想吐槽的尽管吐槽吧，也想找个人帮忙设计下整体的前端页面，有兴趣愿意贡献代码的的小伙伴，欢迎Pull Request吧！😂😂</p><h3 id="项目主要技术栈" tabindex="-1">项目主要技术栈 <a class="header-anchor" href="#项目主要技术栈" aria-label="Permalink to &quot;项目主要技术栈&quot;">​</a></h3><p>.NET8<br> ASP.NET Core MVC<br> Blazor<br> Entity Framework Core<br> Masuit.Tools<br> Masuit.LuceneEFCore.SearchEngine<br> Hangfire</p><h3 id="开发环境" tabindex="-1">开发环境 <a class="header-anchor" href="#开发环境" aria-label="Permalink to &quot;开发环境&quot;">​</a></h3><p>操作系统：Windows 11 23h2<br> IDE：Visual Studio 2022 v17.8<br> 数据库：PostgreSQL 16.x<br> Redis：redis-server-windows 7.x<br> 运行时：必须是.NET 8</p><h3 id="当前运行环境" tabindex="-1">当前运行环境 <a class="header-anchor" href="#当前运行环境" aria-label="Permalink to &quot;当前运行环境&quot;">​</a></h3><p>操作系统：Windows Server 2019<br> 数据库：PostgreSQL 16.x<br> Redis：redis-server-windows 7.x<br> 运行时：.NET 8<br> 服务器配置：4核+8GB+6Gbps<br> 承载流量：单日请求量平均600w左右，单日带宽1TB左右<br><code>请勿使用阿里云、百度云等活动超卖机运行本程序，否则卡出翔！！！</code><br><code>如何判断服务器商是否有超卖：给你的服务器跑个分，如果跑分接近于网络上该处理器公布的分数，则不是超卖的机器，计算公式：总分/核心数进行比较，由于是虚拟机，如果单独比较单核跑分，没有参考意义</code></p><h3 id="基础设施要求" tabindex="-1">基础设施要求 <a class="header-anchor" href="#基础设施要求" aria-label="Permalink to &quot;基础设施要求&quot;">​</a></h3><table><thead><tr><th></th><th style="text-align:right;">最低配置</th><th style="text-align:center;">推荐配置</th><th style="text-align:center;">豪华配置</th><th style="text-align:center;">至尊配置</th></tr></thead><tbody><tr><td>CPU</td><td style="text-align:right;">1核</td><td style="text-align:center;">2核</td><td style="text-align:center;">2核</td><td style="text-align:center;">4核</td></tr><tr><td>内存</td><td style="text-align:right;">1GB</td><td style="text-align:center;">2GB</td><td style="text-align:center;">4GB</td><td style="text-align:center;">8GB</td></tr><tr><td>带宽</td><td style="text-align:right;">1Mbps</td><td style="text-align:center;">1Mbps</td><td style="text-align:center;">5Mbps</td><td style="text-align:center;">1000Mbps+</td></tr><tr><td>数据库</td><td style="text-align:right;">pgsql 9</td><td style="text-align:center;">pgsql 14</td><td style="text-align:center;">pgsql 15+</td><td style="text-align:center;">pgsql 16+</td></tr><tr><td>缓存组件</td><td style="text-align:right;">Redis 3.2+</td><td style="text-align:center;">Redis 5.0+</td><td style="text-align:center;">Redis 5.0+</td><td style="text-align:center;">Redis 7.0+</td></tr><tr><td>备注</td><td style="text-align:right;">玩玩而已</td><td style="text-align:center;">几个人同时访问</td><td style="text-align:center;">几百个人同时访问，单日请求量600w以下</td><td style="text-align:center;">单日请求量600w以上</td></tr></tbody></table><h3 id="主要功能" tabindex="-1">主要功能 <a class="header-anchor" href="#主要功能" aria-label="Permalink to &quot;主要功能&quot;">​</a></h3><h4 id="服务器性能监控" tabindex="-1">服务器性能监控 <a class="header-anchor" href="#服务器性能监控" aria-label="Permalink to &quot;服务器性能监控&quot;">​</a></h4><p>可直接在线实时监控服务器的运行状态，包括CPU、网络带宽、磁盘使用率、内存占用等情况，百分位统计和图表统计，可记录最近一天的服务器健康状态，通过websocket进行数据的推送，仅支持Windows，且需要Windows安装最新的更新。 <img src="https://user-images.githubusercontent.com/20254980/127088294-89c63e04-399c-45a1-ae47-5b55ea86a05d.png" alt="image"></p><h4 id="文章管理" tabindex="-1">文章管理 <a class="header-anchor" href="#文章管理" aria-label="Permalink to &quot;文章管理&quot;">​</a></h4><ul><li>包含文章审核、文章合并、文章列表的增删查改、分类管理、专题管理；</li><li>文章审核：当用户在前台页进行投稿后，会进入审核状态，审核通过后，才会在前台页的文章列表中展示出来。</li><li>文章合并：当用户在前台页进行了文章的编辑后，会创建出文章的合并请求，当后台管理进行相应的合并操作后，前台用户的修改才会正式生效，可以直接合并、编辑并合并和拒绝合并，拒绝时，修改人会收到相应的邮件通知。</li><li>文章操作：可对文章进行修改、新增、置顶、临时删除(下架)、还原、永久删除、禁止评论等操作，编辑后的文章会生成历史版本。文章支持模板变量。</li><li>分类管理：对文章的分类进行增删查改和文章的移动等操作，与文章的关系：一对多。</li><li>专题管理：对文章的专题进行管理，与文章的关系：多对多。</li><li>快速分享：首页快速分享栏目的管理。 <img src="https://user-images.githubusercontent.com/20254980/127089680-c8f57334-2b7e-4ca2-a2a2-01a50d58e61b.png" alt="image"><img src="https://user-images.githubusercontent.com/20254980/127088470-15fabe44-c45f-4801-b2fb-8fc034a593dd.png" alt="image"><img src="https://user-images.githubusercontent.com/20254980/127089714-d85a3f8b-bb8e-4a0a-b6c1-0e4aead194e2.png" alt="image"><img src="https://user-images.githubusercontent.com/20254980/127089725-25a5fa87-2c70-49bd-ada9-e65a8c71797d.png" alt="image"><img src="https://user-images.githubusercontent.com/20254980/127089745-70ec7ac2-b80f-4059-abae-7ba362f02b60.png" alt="image"><img src="https://user-images.githubusercontent.com/20254980/127089763-57457c59-cfdf-4b7d-a31b-8123dc944c88.png" alt="image"></li></ul><h4 id="评论和留言管理" tabindex="-1">评论和留言管理 <a class="header-anchor" href="#评论和留言管理" aria-label="Permalink to &quot;评论和留言管理&quot;">​</a></h4><p>对前台用户提交的留言和评论进行审核，当前台用户提交的内容可能包含有敏感词时，会进入人工审核，审核成功才会在前台页中展示。</p><h4 id="消息通知" tabindex="-1">消息通知 <a class="header-anchor" href="#消息通知" aria-label="Permalink to &quot;消息通知&quot;">​</a></h4><p>站内消息包含评论、留言、投稿、文章合并等通知。</p><h4 id="公告管理" tabindex="-1">公告管理 <a class="header-anchor" href="#公告管理" aria-label="Permalink to &quot;公告管理&quot;">​</a></h4><p>对网站的公告进行增删查改管理。支持定时上下架发布。 <img src="https://user-images.githubusercontent.com/20254980/127088599-9d9d6b8b-9253-4f3d-8b9a-80965c002422.png" alt="image"></p><h4 id="杂项页管理" tabindex="-1">杂项页管理 <a class="header-anchor" href="#杂项页管理" aria-label="Permalink to &quot;杂项页管理&quot;">​</a></h4><p>一些通用的页面管理，可自由灵活的创建静态页面。 <img src="https://user-images.githubusercontent.com/20254980/127088620-3ea1e808-7ce2-4ede-9a62-765609cfda94.png" alt="image"></p><h4 id="系统设置" tabindex="-1">系统设置 <a class="header-anchor" href="#系统设置" aria-label="Permalink to &quot;系统设置&quot;">​</a></h4><ul><li>包含系统的全局设置、防火墙管理、网站运行日志记录、友链管理、邮件模板的管理。</li><li>全局设置：网站的一些基本配置和SEO相关操作等；</li><li>防火墙：对网站的所有请求进行全局流量的拦截，让规则内的请求阻止掉，支持黑名单、白名单、IP地址段、国家或地区、关键词审查等规则；</li><li>模板变量：针对文章内容的通用内容生成，变量只能添加不能删除。 <img src="https://user-images.githubusercontent.com/20254980/127088748-13d56e4a-f5e0-4c59-9135-0af935d70976.png" alt="image"><img src="https://user-images.githubusercontent.com/20254980/127088776-b95f8e8d-5f07-4937-8a9f-6a975ed29e31.png" alt="image"><img src="https://user-images.githubusercontent.com/20254980/127089076-2599c484-9323-4d1a-82e5-61ef833ed4e3.png" alt="image"><img src="https://user-images.githubusercontent.com/20254980/127089090-5b0dedcb-6be7-46ce-82e7-b4fcb50ea032.png" alt="image"><img src="https://user-images.githubusercontent.com/20254980/127089200-cca28f8a-87bb-4a8b-b581-91c0572714c9.png" alt="image"></li></ul><h4 id="广告管理" tabindex="-1">广告管理 <a class="header-anchor" href="#广告管理" aria-label="Permalink to &quot;广告管理&quot;">​</a></h4><p>主动式的广告投放管理，支持竞价排名，支持在banner、边栏、页内、列表内的广告展示，竞价或权重的高低决定广告出现的概率。支持按地区进行投放。 <img src="https://user-images.githubusercontent.com/20254980/127089325-27b5bf4d-49ea-41ea-aae6-8829924bcc92.png" alt="image"><img src="https://user-images.githubusercontent.com/20254980/127089358-7bab075c-5bb7-41ea-8900-29a2eecb71de.png" alt="image"></p><h4 id="赞助管理" tabindex="-1">赞助管理 <a class="header-anchor" href="#赞助管理" aria-label="Permalink to &quot;赞助管理&quot;">​</a></h4><p>对网站打赏进行增删查改操作，自动掩码。 <img src="https://user-images.githubusercontent.com/20254980/127089429-beb5baf0-c1d3-4880-85c0-9f897fb0de75.png" alt="image"></p><h4 id="搜索统计" tabindex="-1">搜索统计 <a class="header-anchor" href="#搜索统计" aria-label="Permalink to &quot;搜索统计&quot;">​</a></h4><p>当前台用户每Session周期内的关键词搜索，不重复的关键词将会被记录，用于热词统计，仅记录最近一个月内的所有搜索关键词，用于统计当月、7天以及当天的搜索热词。 <img src="https://user-images.githubusercontent.com/20254980/127089504-2c32288d-aa0d-4331-a3a2-90e97ba9f7a2.png" alt="image"></p><h4 id="任务管理" tabindex="-1">任务管理 <a class="header-anchor" href="#任务管理" aria-label="Permalink to &quot;任务管理&quot;">​</a></h4><p>hangfire的可视化管理页面</p><h4 id="文件管理" tabindex="-1">文件管理 <a class="header-anchor" href="#文件管理" aria-label="Permalink to &quot;文件管理&quot;">​</a></h4><p>服务器文件的在线管理，支持浏览、预览、压缩、解压缩、创建文件夹、上传、下载、打包下载等文件的基本操作。 <img src="https://user-images.githubusercontent.com/20254980/127089568-5d3bcef6-5ad7-4f44-b30d-b7253be2d3fb.png" alt="image"></p><h4 id="onedrive网盘程序" tabindex="-1">onedrive网盘程序 <a class="header-anchor" href="#onedrive网盘程序" aria-label="Permalink to &quot;onedrive网盘程序&quot;">​</a></h4><p>基于<a href="https://github.com/YukiCoco/YukiDrive" target="_blank" rel="noreferrer">YukiDrive</a>二次开发的内嵌网盘应用。 <img src="https://user-images.githubusercontent.com/20254980/127090161-09fa9337-4601-4eaa-b47c-cefd8242910d.png" alt="image"><img src="https://user-images.githubusercontent.com/20254980/127090259-868e38f8-abbe-474e-bdd3-4c241b49d1b5.png" alt="image"></p><h3 id="项目架构" tabindex="-1">项目架构 <a class="header-anchor" href="#项目架构" aria-label="Permalink to &quot;项目架构&quot;">​</a></h3><ul><li>项目采用单体架构，方便部署和配置，传统的MVC模式，ASP.NET Core MVC+EF Core的简单架构。</li><li>Controller→Service→Repository→DbContext<br><img src="https://git.imweb.io/ldqk/imgbed/raw/master/5ccbcc714c3db.jpg" alt="image"></li></ul><h3 id="项目文件夹定义" tabindex="-1">项目文件夹定义： <a class="header-anchor" href="#项目文件夹定义" aria-label="Permalink to &quot;项目文件夹定义：&quot;">​</a></h3><p>App_Data：存放网站的一些常规数据，以文本的形式存在，这类数据不需要频繁更新的。<br> ┠─cert文件夹：存放https证书<br> ┠─ban.txt：敏感词库<br> ┠─CustomKeywords.txt：搜索分词词库<br> ┠─denyip.txt：IP地址黑名单<br> ┠─DenyIPRange.txt：IP地址段黑名单<br> ┠─GeoLite2-City.mmdb：MaxMind地址库<br> ┠─ip2region.db：ip2region地址库<br> ┠─mod.txt：审查词库<br> ┠─whitelist.txt：IP地址白名单<br> Common：之前老项目的Common项目；<br> Configs：项目的一些配置对象<br> Controllers：控制器<br> Extensions：一些扩展类或一些项目的扩展功能，比如hangfire、ueditor、中间件、拦截器等；<br> Infrastructure：数据访问基础设施，包含Repository和Services，相当于老项目的DAL和BLL；<br> Migrations：数据库CodeFirst模式的迁移文件；<br> Models：存放一些实体类或DTO；<br> Views：razor视图<br> wwwroot：项目的所有静态资源；</p><h3 id="核心功能点技术实现" tabindex="-1">核心功能点技术实现 <a class="header-anchor" href="#核心功能点技术实现" aria-label="Permalink to &quot;核心功能点技术实现&quot;">​</a></h3><h4 id="后端技术栈" tabindex="-1">后端技术栈： <a class="header-anchor" href="#后端技术栈" aria-label="Permalink to &quot;后端技术栈：&quot;">​</a></h4><p>依赖注入容器：.NET Core自带的+Autofac，autofac主要负责批量注入和属性注入；<br> 实体映射框架：automapper 9.0；<br> 缓存框架：CacheManager统一管理网站的热数据，如Session、内存缓存，EFCoreSecondLevelCacheInterceptor负责管理EF Core的二级缓存；<br> 定时任务：hangfire统一管理定时任务，包含友链回链检查、文章定时发布、访客统计、搜索热词统计、Lucene库刷新等任务；<br> Websocket：Blazor进行流推送实现服务器硬件健康状态的实时监控；<br> 硬件检测：Masuit.Tools封装的硬件检测功能；<br> 全文检索：Masuit.LuceneEFCore.SearchEngine基于Lucene.Net 4.8实现的全文检索中间件；<br> 中文分词：结巴分词结合本地词库实现中文分词；<br> 断点下载：Masuit.Tools封装的断点续传功能；<br> Redis：CSRedis负责Redis的读写操作；<br> 文件压缩：Masuit.Tools封装的zip文件压缩功能；<br> Html字符串操作：htmldiff.net-core实现文章版本的内容对比，HtmlAgilityPack实现html字符串的“DOM”操作，主要是用于提取img标签，HtmlSanitizer实现表单的html代码的仿XSS处理；<br> 图床：支持多个图床的上传：gitee、github、gitlab；<br> 拦截器：授权拦截器、请求拦截器负责网站全局流量的拦截和清洗、防火墙拦截器负责拦截网站自带防火墙规则的请求流量、异常拦截器、url重定向重写拦截器，主要用于将http的请求重定向到https；<br> 请求IP来源检查：maxmind+IP2Region+本地数据库实现请求IP的来源检查；<br> RSS：WilderMinds.RssSyndication实现网站的RSS源；<br> EF扩展功能：zzzproject相关nuget包<br> Word文档转换：OpenXml实现浏览器端上传Word文档转换为html字符串。<br> 在线文件管理：angular-filemanager+文件管理代码实现服务器文件的在线管理</p><h4 id="前端技术栈" tabindex="-1">前端技术栈 <a class="header-anchor" href="#前端技术栈" aria-label="Permalink to &quot;前端技术栈&quot;">​</a></h4><h5 id="前台页面" tabindex="-1">前台页面： <a class="header-anchor" href="#前台页面" aria-label="Permalink to &quot;前台页面：&quot;">​</a></h5><p>基于bootstrap3布局<br> ueditor+layedit富文本编辑器<br> notie提示栏+sweetyalert弹窗+layui组件<br> angularjs</p><h5 id="后台管理页" tabindex="-1">后台管理页： <a class="header-anchor" href="#后台管理页" aria-label="Permalink to &quot;后台管理页：&quot;">​</a></h5><ul><li>angularjs单一页面应用程序</li><li>material布局风格</li><li>echart图表组件</li><li>ng-table表格插件</li><li>material风格angular-filemanager文件管理器</li></ul><h4 id="性能和安全相关" tabindex="-1">性能和安全相关 <a class="header-anchor" href="#性能和安全相关" aria-label="Permalink to &quot;性能和安全相关&quot;">​</a></h4><ul><li>hangfire实现分布式任务调度；</li><li>Z.EntityFramework.Plus实现数据访问层的高性能数据库批量操作；</li><li>Lucene.NET实现高性能站内检索；</li><li>通过url的敏感词检查过滤恶意流量；</li><li>限制客户端的请求频次；</li><li>表单的AntiForgeryToken防止恶意提交；</li><li>ip2region+MaxMind地址库实现请求来源审查；</li><li>用户信息采用端到端RSA非对称加密进行数据传输；</li></ul><h3 id="项目部署" tabindex="-1">项目部署 <a class="header-anchor" href="#项目部署" aria-label="Permalink to &quot;项目部署&quot;">​</a></h3><p>以Windows系统为例，Linux系统请自行折腾。</p><h4 id="_1-安装基础设施" tabindex="-1">1.安装基础设施： <a class="header-anchor" href="#_1-安装基础设施" aria-label="Permalink to &quot;1.安装基础设施：&quot;">​</a></h4><ol><li>安装.net6运行时：<a href="https://dotnet.microsoft.com/zh-cn/download" target="_blank" rel="noreferrer">https://dotnet.microsoft.com/zh-cn/download</a></li><li>安装mysql：<a href="https://masuit.org/1567" target="_blank" rel="noreferrer">mysql 8 绿色版</a>,或pgsql：<a href="https://masuit.org/2160" target="_blank" rel="noreferrer">pgsql 14 绿色版</a></li><li>安装redis：<a href="https://masuit.org/130" target="_blank" rel="noreferrer">redis for windows绿色版</a></li></ol><h4 id="_2-生成网站应用" tabindex="-1">2.生成网站应用 <a class="header-anchor" href="#_2-生成网站应用" aria-label="Permalink to &quot;2.生成网站应用&quot;">​</a></h4><h4 id="方式一-编译源代码" tabindex="-1">方式一：编译源代码： <a class="header-anchor" href="#方式一-编译源代码" aria-label="Permalink to &quot;方式一：编译源代码：&quot;">​</a></h4><p>编译需要将<a href="https://github.com/ldqk/Masuit.Tools" target="_blank" rel="noreferrer">Masuit.Tools</a>项目和<a href="https://github.com/ldqk/Masuit.LuceneEFCore.SearchEngine" target="_blank" rel="noreferrer">Masuit.LuceneEFCore.SearchEngine</a>项目也一起clone下来，和本项目平级目录存放，才能正常编译，否则，将<a href="https://github.com/ldqk/Masuit.Tools" target="_blank" rel="noreferrer">Masuit.Tools</a>项目和<a href="https://github.com/ldqk/Masuit.LuceneEFCore.SearchEngine" target="_blank" rel="noreferrer">Masuit.LuceneEFCore.SearchEngine</a>项目移除，通过nuget安装也是可以的。<br><img src="https://git.imweb.io/ldqk/imgbed/raw/master/20191019/6370710386639200004363431.png" alt=""></p><h4 id="方式二-下载编译好的现成的二进制文件" tabindex="-1">方式二：下载编译好的现成的二进制文件 <a class="header-anchor" href="#方式二-下载编译好的现成的二进制文件" aria-label="Permalink to &quot;方式二：下载编译好的现成的二进制文件&quot;">​</a></h4><p>前往<a href="https://github.com/ldqk/Masuit.MyBlogs/releases" target="_blank" rel="noreferrer">Release</a>下载最新的压缩包解压即可。</p><h4 id="_3-还原数据库脚本" tabindex="-1">3.还原数据库脚本 <a class="header-anchor" href="#_3-还原数据库脚本" aria-label="Permalink to &quot;3.还原数据库脚本&quot;">​</a></h4><p>创建数据库，名称随意，如：myblogs，然后前往<a href="https://github.com/ldqk/Masuit.MyBlogs/releases" target="_blank" rel="noreferrer">Release</a>或<a href="https://github.com/ldqk/Masuit.MyBlogs/tree/master/database/mysql" target="_blank" rel="noreferrer">https://github.com/ldqk/Masuit.MyBlogs/tree/master/database/mysql</a>下载最新的数据库文件,还原到新建的数据库。<br> 如果没有你目标数据库类型的还原文件，你可以先还原到mysql或pgsql中，然后使用<a href="https://masuit.org/2163" target="_blank" rel="noreferrer">Full Convert</a>转换成你需要的目标数据库类型即可。</p><h4 id="_4-修改配置文件" tabindex="-1">4.修改配置文件： <a class="header-anchor" href="#_4-修改配置文件" aria-label="Permalink to &quot;4.修改配置文件：&quot;">​</a></h4><p>主要需要配置的是以下内容，其他配置均为可选项，不配置则表示不启用； <img src="https://user-images.githubusercontent.com/20254980/169738528-ba0cc1a4-cb19-4e9d-b6cd-2f146a633c35.png" alt="image"><br> 同时，BaiduAK参与了数据库的加密，如果你没有BaiduAK，自行到百度地图开放平台申请，<code>免费的</code>。<br> 如果你使用了CDN，需要配置TrueClientIPHeader选项为真实IP请求转发头，如cloudflare的叫CF-Connecting-IP。 如果Redis不在本机，需要在配置文件中的Redis节下配置，固定为Redis，值的格式：127.0.0.1:6379,allowadmin=true，若未正确配置，将按默认值“127.0.0.1:6379,allowadmin=true,abortConnect=false”。<br> 其他配置请参考appsettings.json的注释按需配置即可。</p><h4 id="_5-启动网站" tabindex="-1">5.启动网站 <a class="header-anchor" href="#_5-启动网站" aria-label="Permalink to &quot;5.启动网站&quot;">​</a></h4><p>配置好环境和配置文件后，可直接通过dotnet Masuit.MyBlogs.Core.dll命令或直接双击Masuit.MyBlogs.Core.exe运行，也可以通过nssm挂在为Windows服务运行，或者你也可以尝试在Linux下部署。</p><h4 id="其他方式部署" tabindex="-1">其他方式部署 <a class="header-anchor" href="#其他方式部署" aria-label="Permalink to &quot;其他方式部署&quot;">​</a></h4><p>IIS：部署时必须将应用程序池的标识设置为LocalSystem，否则无法监控服务器硬件，同时需要安装.NET Core Hosting运行时环境，IIS程序池改为无托管代码。<br><img src="https://git.imweb.io/ldqk/imgbed/raw/master/5ccbf30b6a083.jpg" alt=""><br> docker/Linux：自行爬文。</p><h4 id="有偿代部署服务" tabindex="-1">有偿代部署服务 <a class="header-anchor" href="#有偿代部署服务" aria-label="Permalink to &quot;有偿代部署服务&quot;">​</a></h4><p>请联系：admin@masuit.com</p><h3 id="后台管理" tabindex="-1">后台管理： <a class="header-anchor" href="#后台管理" aria-label="Permalink to &quot;后台管理：&quot;">​</a></h3><p><a href="https://127.0.0.1:5001/dashboard" target="_blank" rel="noreferrer">https://127.0.0.1:5001/dashboard</a></p><ul><li>初始用户名：masuit</li><li>初始密码：123abc@#$ <code>若密码不对，可在debug模式下进入后台【用户管理】下重置密码</code></li></ul><h3 id="推荐项目" tabindex="-1">推荐项目 <a class="header-anchor" href="#推荐项目" aria-label="Permalink to &quot;推荐项目&quot;">​</a></h3><p>基于EntityFrameworkCore和Lucene.NET实现的全文检索搜索引擎：<a href="https://github.com/ldqk/Masuit.LuceneEFCore.SearchEngine" title="Masuit.LuceneEFCore.SearchEngine" target="_blank" rel="noreferrer">Masuit.LuceneEFCore.SearchEngine</a></p><p>.NET万能框架工具库：<a href="https://github.com/ldqk/Masuit.Tools" target="_blank" rel="noreferrer">Masuit.Tools</a></p>',87),l=[s];function o(n,h,d,c,g,b){return t(),a("div",null,l)}const p=e(i,[["render",o]]);export{m as __pageData,p as default};
