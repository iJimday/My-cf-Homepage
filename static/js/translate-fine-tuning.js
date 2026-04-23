translate.selectLanguageTag.show = false //设置不显示语言选择的select下拉框
translate.language.setLocal('chinese_simplified'); //设置本地语种为简体中文
translate.language.translateLanguagesRange = ['chinese_simplified']; //只翻译简体中文
translate.language.setUrlParamControl('lang'); //根据URL传参控制以何种语种显示
translate.ignore.text.push('中文'); //翻译时忽略指定的文字不翻译
translate.ignore.text.push('English'); //翻译时忽略指定的文字不翻译