translate.language.setUrlParamControl('lang');//根据URL传参控制以何种语种显示
translate.selectLanguageTag.show = false //设置不显示语言选择的select下拉框
translate.language.setLocal('chinese_simplified');//设置本地语种为简体中文
translate.language.translateLanguagesRange = ['chinese_simplified'];//只翻译简体中文
translate.setAutoDiscriminateLocalLanguage();//设置用户第一次用时，自动识别其所使用的语种进行切换
translate.ignore.text.push('中文');//翻译时忽略指定的文字不翻译
translate.ignore.text.push('English');//翻译时忽略指定的文字不翻译
translate.whole.enableAll();//元素的内容整体翻译能力配置
translate.nomenclature.append('chinese_simplified','english',`
	首页=Homepage
	其他=Others
	关于=About
	小戴=Jimday
	阿戴=Jimday
	就不告诉你‼️=I won't tell you️‼️
	Jimday | 小戴=Jimday
	小戴的CF主页！🎉=Jimday's
	Jimday's Cloudflare Homepage！=Cloudflare Homepage！🎉
	模板=Template
	网站地图=Sitemap
`);//自定义翻译术语
translate.progress.style=`
    /* CSS部分 */
    /* 灰色水平加载动画 */
    .translate_api_in_progress {
      position: relative;
      overflow: hidden; /* 隐藏超出部分的动画 */
    }
    /* 蒙版层 */
    .translate_api_in_progress::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 1); /* 半透明白色遮罩 */
      z-index: 2;
    }
    /* 水平加载条动画 */
    .translate_api_in_progress::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height:100%; /* 细线高度 */
      background: linear-gradient(
        90deg,
        transparent 0%,
        #e8e8e8 25%,  /* 浅灰色 */
        #d0d0d0 50%,  /* 中灰色 */
        #e8e8e8 75%,  /* 浅灰色 */
        transparent 100%
      );
      background-size: 200% 100%;
      animation: translate_api_in_progress_horizontal-loader 3.5s linear infinite;
      z-index: 3;
      transform: translateY(-50%);
    }
    @keyframes translate_api_in_progress_horizontal-loader {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
`;
translate.progress.api.startUITip();//启用翻译中的遮罩层
translate.storage = {
    set:function(key,value){
        localStorage.setItem(key,value);
    },
    get:function(key){
        return localStorage.getItem(key);
    }
}//重写一级缓存-浏览器缓存