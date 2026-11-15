// 所有配方資料。新增配方請照 AGENTS.md 第 5 節的欄位格式，加在陣列最後。
window.RECIPES = [
  {
    id: "negroni", name: "內格羅尼", nameEn: "Negroni",
    base: "琴酒", flavor: ["苦甜", "酒感強"], glass: "古典杯", method: "攪拌", difficulty: 1,
    ingredients: [{ name: "琴酒", ml: 30 }, { name: "金巴利", ml: 30 }, { name: "甜香艾酒", ml: 30 }],
    steps: ["古典杯放入大冰塊。", "三種酒依序倒入杯中。", "用吧匙攪拌約 20 秒。", "擠一片橙皮油後放入杯中。"],
    garnish: "橙皮", note: "三種材料等比例，是最容易記的經典。"
  },
  {
    id: "old-fashioned", name: "古典雞尾酒", nameEn: "Old Fashioned",
    base: "威士忌", flavor: ["酒感強", "微甜"], glass: "古典杯", method: "攪拌", difficulty: 1,
    ingredients: [{ name: "波本威士忌", ml: 50 }, { name: "糖漿", ml: 5 }, { name: "安格仕苦精", ml: 1 }],
    steps: ["攪拌杯中加入糖漿與苦精。", "倒入威士忌與冰塊。", "攪拌約 30 秒後濾入裝有大冰塊的古典杯。", "擠橙皮油並放入杯中。"],
    garnish: "橙皮", note: "糖漿不用多，重點是喝出威士忌本身。"
  },
  {
    id: "margarita", name: "瑪格麗特", nameEn: "Margarita",
    base: "龍舌蘭", flavor: ["酸甜", "清爽"], glass: "雞尾酒杯", method: "搖盪", difficulty: 2,
    ingredients: [{ name: "龍舌蘭", ml: 50 }, { name: "橙皮利口酒", ml: 20 }, { name: "新鮮檸檬汁", ml: 15 }],
    steps: ["杯口抹檸檬汁後沾鹽（選填）。", "所有材料加冰搖盪約 12 秒。", "雙重過濾倒入冰過的杯中。"],
    garnish: "鹽口杯、檸檬片", note: "檸檬汁請現榨，味道差很多。"
  },
  {
    id: "daiquiri", name: "黛綺莉", nameEn: "Daiquiri",
    base: "蘭姆", flavor: ["酸甜", "清爽"], glass: "雞尾酒杯", method: "搖盪", difficulty: 1,
    ingredients: [{ name: "白蘭姆酒", ml: 60 }, { name: "新鮮萊姆汁", ml: 20 }, { name: "糖漿", ml: 10 }],
    steps: ["所有材料加冰搖盪約 12 秒。", "雙重過濾倒入冰過的杯中。", "放上萊姆片裝飾。"],
    garnish: "萊姆片", note: "新手練習搖盪與酸甜平衡的好選擇。"
  },
  {
    id: "moscow-mule", name: "莫斯科騾子", nameEn: "Moscow Mule",
    base: "伏特加", flavor: ["氣泡", "薑味"], glass: "銅杯或高球杯", method: "直調", difficulty: 1,
    ingredients: [{ name: "伏特加", ml: 45 }, { name: "新鮮萊姆汁", ml: 15 }, { name: "薑汁啤酒", ml: 120 }],
    steps: ["杯中裝滿冰塊。", "倒入伏特加與萊姆汁。", "補上薑汁啤酒，輕輕攪拌一次。"],
    garnish: "萊姆角", note: "薑汁啤酒（ginger beer）不是薑汁汽水，風味更辛辣。"
  },
  {
    id: "whisky-highball", name: "威士忌嗨棒", nameEn: "Whisky Highball",
    base: "威士忌", flavor: ["氣泡", "清爽"], glass: "高球杯", method: "直調", difficulty: 1,
    ingredients: [{ name: "威士忌", ml: 40 }, { name: "氣泡水", ml: 120 }],
    steps: ["高球杯裝滿冰塊並先降溫。", "倒入威士忌，攪拌約 5 圈。", "沿杯壁緩緩倒入氣泡水，輕輕上下提拉一次。"],
    garnish: "檸檬皮（選填）", note: "氣泡水要很冰，倒的時候不要沖到冰塊。"
  }
];
