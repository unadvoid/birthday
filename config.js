// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "许多事总是一晃眼间",//这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "愿你时刻都奔走在自己热爱里",  // 同上
        "按时长大",
        "岁岁年年，万喜万般宜",
        "不过是又长大一岁的美女罢了",
        "让我们干了这碗一十八年的",
        "人间烟火",
        "作一颗宇宙中",
        "最自由最快乐的鑫鑫",
        "最后享受今天的日子",
        "YAMI~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
   Pictures : {"许多事总是一晃眼间",//这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!
          "按时长大": "\Pictures\Saved Pictures",
           "岁岁年年，万喜万般宜": "\Pictures\新建文件夹",
         "不过是又长大一岁的美女罢了":"\Pictures\新建文件夹 (3)",
        "让我们干了这碗一十八年的",
        "人间烟火",
        "作一颗宇宙中",
      "最自由最快乐的鑫鑫":"\Pictures\新建文件夹 (2)",
         "最后享受今天的日子":"\Pictures\xiangpian",
        "YAMI~~",
     
       
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        开始: "开始",
        音乐: "音乐",
        音乐: "颜色",
        好像少点东西: "好像少点东西",
        蛋糕？: "蛋糕？",
        蜡烛？: "蜡烛？",
        生日快乐: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
