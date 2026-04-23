translate.selectLanguageTag.show = false //设置不显示语言选择的select下拉框
translate.language.setLocal('chinese_simplified'); //设置本地语种为简体中文
translate.language.translateLanguagesRange = ['chinese_simplified']; //只翻译简体中文
translate.language.setUrlParamControl('lang'); //根据URL传参控制以何种语种显示
translate.ignore.text.push('中文'); //翻译时忽略指定的文字不翻译
translate.ignore.text.push('English'); //翻译时忽略指定的文字不翻译
translate.nomenclature.append('chinese_simplified', 'english', `
			首页=Homepage
			其他=Others
			关于=About
			小戴=Jimday
			就不告诉你‼️=I won't tell you️‼️
			Jimday | 小戴=Jimday
			小戴的CF主页！🎉=Jimday's
			Jimday's Cloudflare Homepage！=Cloudflare Homepage！🎉
		`); //自定义翻译术语