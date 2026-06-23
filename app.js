const missions = [
  {
    title: "필통 검색하기",
    icon: "필",
    color: "#03c75a",
    budget: 10000,
    situationSlides: [
      "내일부터 2학기가 시작됩니다.<br>1학기 때 쓰던 필통을 열어보니 지퍼가 고장 나서<br>잘 안 닫히고, 필기구가 다 튀어나옵니다.",
      "예산 10,000원 안에서<br>내일부터 당장 학교에서 쓸<br>새 필통을 직접 골라봅시다!"
    ],
    criteria: ["가격", "디자인", "수납력", "튼튼함", "무게"],
    products: [
      product("p1", "반짝스타 캐릭터 필통", "친구들이 많이 찾는 인기 캐릭터 필통", 9500, 0, 4.6, 48, 
        "인기 캐릭터가 그려진 반짝이 디자인의 지퍼형 필통입니다. 책상 위에 올려두면 눈에 잘 띄고 디자인 만족도가 높습니다.", 
        ["실물 디자인이 진짜 예뻐서 애가 너무 좋아해요! 완전 만족!", "다 좋은데 생각보다 연필이 많이 안 들어가서 살짝 아쉽네요.", "예쁘긴 한데 며칠 쓰니까 반짝이가 조금씩 떨어져요 ㅠㅠ 가성비는 글쎄요.."]),
      product("p2", "튼튼천 기본 필통", "오래 쓰는 학생들이 고르는 실속 필통", 6000, 0, 4.5, 126, 
        "천 소재로 만들어져 가볍고 찢어질 걱정 없이 튼튼한 기본 형태의 필통입니다. 오래 쓸 수 있는 실용적인 상품입니다.", 
        ["가볍고 튼튼해서 막 쓰기 최고예요. 가격도 진짜 저렴함!", "칸막이가 하나도 없어서 안에서 연필이랑 지우개가 굴러다니네요.", "디자인은 좀 심심하지만 5학년 내내 써도 멀쩡해서 재구매합니다."]),
      product("p3", "3칸 정리왕 필통", "연필, 지우개, 자까지 깔끔하게 정리", 8500, 2500, 4.4, 89, 
        "3개의 수납 공간으로 나뉘어 있어 연필, 지우개, 자 등을 분류해서 넣기 좋은 각진 형태의 필통입니다. 물건을 깔끔하게 정리하기 좋습니다.", 
        ["칸이 나뉘어 있어서 필기구 찾기가 너무 편해요! 배송도 칼배송!", "가방에 넣으니까 부피를 많이 차지하고 은근히 무거워요.", "배송비까지 합치니까 11,000원이라 초등학생 필통치고는 약간 비싼 느낌이 듭니다."]),
      product("p4", "초특가 플라스틱 필통", "오늘만 3,000원", 3000, 3000, 3.2, 34, 
        "투명 플라스틱 재질로 되어 있어 매우 가볍고 단순한 디자인의 필통입니다. 가방에 넣기 좋고 저렴한 가격에 판매 중입니다.", 
        ["플라스틱이라 진짜 가벼워서 들고 다니기 좋네요.", "싼 맛에 샀는데 책상에서 한 번 떨어뜨리니까 금이 쫙 갔네요 ㅠㅠ", "뚜껑 닫는 잠금장치가 헐거워서 자꾸 열려요. 조심해서 써야 할 듯."]),
      product("p5", "심플 지퍼 필통", "가볍게 들고 다니는 깔끔한 필통", 5000, 0, 4.1, 67, 
        "미니 파우치 형태로 된 심플한 무지 필통입니다. 꼭 필요한 필기구만 가볍게 넣고 다니기 좋습니다.", 
        ["무료배송에 5천원이라 완전 득템했어요! 무게도 안 느껴질 정도로 가벼움.", "공간이 너무 작아요. 형광펜이랑 색연필 몇 개 넣으니까 안 잠깁니다.", "아무 무늬도 없는 무지 디자인이라 좀 밋밋하긴 해요. 스티커 붙여서 씁니다."])
    ]
  },
  {
    title: "색연필 검색하기",
    icon: "색",
    color: "#03c75a",
    budget: 20000,
    situationSlides: [
      "미술 과제를 하려고 스케치북을 폈는데,<br>집에 있는 색연필이 너무 몽당연필이라<br>색칠하기가 힘듭니다.",
      "예산 20,000원 안에서,<br>미술 준비물을 직접 인터넷으로 주문해 봅시다!"
    ],
    criteria: ["가격", "색 수", "색이 진하게 나오는지", "튼튼함", "잘 깎이는지", "보관 편리함"],
    products: [
      product("c1", "기본 12색 색연필", "가장 기본적인 색만 알차게", 5000, 0, 4.2, 95, 
        "학교 미술 시간에 필요한 핵심 색상 12가지로 구성된 기본 색연필 세트입니다. 친환경 종이 케이스에 들어있어 휴대하기 가볍습니다.", 
        ["학교 준비물로 딱 맞게 샀네요. 가격 싸고 무료배송이라 좋아요.", "12색이라서 하늘색이나 연두색 같은 중간색이 없어서 아쉬워요.", "종이 곽이라서 몇 번 꺼냈다 넣었다 하니까 입구가 다 찢어졌어요 ㅠ"]),
      product("c2", "인기 24색 색연필", "색도 적당하고 발색도 좋은 인기 상품", 12000, 0, 4.7, 248, 
        "색이 진하게 잘 나오고 자주 쓰이는 24가지 색상으로 구성된 인기 색연필 세트입니다. 부드럽게 잘 칠해지고 쉽게 부러지지 않아 쓰기 편합니다.", 
        ["부드럽게 잘 칠해지고 색깔도 예뻐서 애가 매일 그림 그려요.", "연필 깎이로 깎을 때 심이 잘 안 부러져서 스트레스 안 받음!", "틴케이스가 아니라 두꺼운 종이 재질이라서 보관할 때 조금 조심해야 돼요."]),
      product("c3", "전문가 느낌 36색 색연필", "자세한 표현까지 가능한 고급 36색", 19000, 0, 4.8, 112, 
        "36가지의 다양한 색상으로 자세하고 풍부한 표현이 가능한 전문가급 색연필입니다. 부드러운 터치감과 색이 선명하고 진하게 나오는 것을 제공합니다.", 
        ["미술 좋아하는 딸 사줬는데 색이 너무 다양해서 대만족이요!", "발색 진짜 쨍하고 예쁩니다. 비싼 값을 하네요.", "길쭉해서 학교 책상 서랍에 넣기는 사이즈가 살짝 커요. 휴대용보단 집에서 쓰기 좋음."]),
      product("c4", "초특가 24색 색연필", "24색인데 7,000원", 7000, 2500, 3.4, 52, 
        "다양한 24색을 저렴한 가격에 제공하는 특가 기획 색연필 세트입니다. 부담 없이 여러 가지 색을 사용할 수 있습니다.", 
        ["24색인데 가격이 엄청 싸서 가성비는 좋네요.", "색칠할 때 색이 너무 연하게 나와서 힘을 줘서 칠해야 돼요.", "배송 올 때부터 심이 두 개 부러져서 왔고, 칠할 때도 뚝뚝 잘 부러집니다 ㅠㅠ"]),
      product("c5", "케이스 포함 18색 색연필", "흩어지기 쉬운 색연필을 깔끔하게 보관", 15000, 0, 4.4, 77, 
        "충격에 강한 틴케이스에 담긴 18색 색연필 세트입니다. 뚜껑을 닫아 깔끔하게 보관할 수 있어 잃어버릴 걱정이 적습니다.", 
        ["철제 케이스라서 튼튼하고 뚜껑 딱 닫히니까 정리하기 너무 편해요.", "가방 안에서 굴러다녀도 부러질 걱정 없어서 든든함.", "1만 5천원인데 18색밖에 안 돼서 색상 수 대비 약간 비싼 감이 있습니다."])
    ]
  },
  {
    title: "운동화 검색하기",
    icon: "화",
    color: "#03c75a",
    budget: 50000,
    situationSlides: [
      "요즘 달리기 연습을 자주 했더니<br>원래 신던 운동화 밑창이 다 닳아서<br>비 오는 날마다 미끄러집니다.",
      "안전을 위해 새 운동화가 필요합니다.<br>예산 50,000원 안에서<br>나에게 딱 맞는 운동화를 골라봅시다!"
    ],
    criteria: ["가격", "편안함", "디자인", "오래 신어도 튼튼한지", "무게", "A/S"],
    products: [
      product("s1", "인기브랜드 러닝화", "우리 반에서도 많이 신는 인기 운동화", 49000, 0, 4.5, 315, 
        "최신 유행하는 스타일리시한 디자인의 유명 브랜드 러닝화입니다. 교복이나 평상복 어디에나 잘 어울리는 인기 상품입니다.", 
        ["디자인 미쳤어요 실물 깡패! 반 친구들이 다 어디서 샀냐고 물어봐요 ㅋㅋ", "무료 교환 돼서 사이즈 안 맞았는데 바로 편하게 바꿨습니다.", "바닥 쿠션이 딱딱해서 체육 시간에 오래 뛰면 발바닥이 좀 피곤해요."]),
      product("s2", "발편한 쿠션 운동화", "많이 걸어도 편안한 쿠션 운동화", 39000, 0, 4.7, 228, 
        "발의 모양을 잡아주는 메모리폼 푹신한 쿠션이 들어있는 운동화입니다. 충격 흡수가 잘 되어 오래 걸어도 발이 편안합니다.", 
        ["발볼이 넓어서 항상 고생했는데 이 신발은 하루 종일 신어도 진짜 편해요.", "쿠션감이 좋아서 계단 오르내릴 때 관절에 무리가 안 가네요.", "디자인이 너무 아재 느낌? 밋밋해서 패션용로는 아쉽습니다."]),
      product("s3", "초경량 실내외 운동화", "가볍게 뛰기 좋은 운동화", 29000, 2500, 4.0, 84, 
        "바람이 잘 통하는 메시 소재를 사용하여 무척 가벼운 초경량 운동화입니다. 땀이 잘 차지 않아 가벼운 달리기용으로 좋습니다.", 
        ["신발 진짜 가벼움. 안 신은 것 같아요. 달리기할 때 날아다님.", "통풍이 잘 돼서 여름에 신기 좋고 가성비 만족합니다.", "가벼운 건 좋은데 밑창이 고무가 아니라 스펀지 같아서 금방 닳고 비 올 때 미끄러워요."]),
      product("s4", "튼튼 밑창 운동화", "매일 신기 좋은 안정적인 밑창", 45000, 0, 4.6, 171, 
        "아래창에 고무를 덧대어 쉽게 닳지 않아 오래 신어도 튼튼한 밑창을 가진 운동화입니다. 발목을 안정적으로 잡아주어 매일 활동적으로 신기 좋습니다.", 
        ["아들내미가 신발을 너무 험하게 신어서 샀는데, 6개월째 밑창이 쌩쌩하네요.", "바닥 튼튼하고 발목 잘 잡아줘서 안정감이 최고입니다.", "신발 자체가 두꺼워서 그런가 좀 무거워요. 뛸 때 무거운 느낌이 듭니다."]),
      product("s5", "초특가 패션 운동화", "오늘만 특가, 눈에 띄는 디자인", 19000, 3000, 3.3, 43, 
        "화려한 형광색 포인트로 시선을 사로잡는 개성 있는 디자인의 특가 패션 운동화입니다.", 
        ["색깔 진짜 튀고 예쁨 ㅋㅋ 싼 가격에 패션템 하나 건졌네요.", "사이즈 미스 났는데 특가라고 교환 안 해줘서 당근에 팔아야 할 듯 ㅠ", "디자인만 예쁘고 발볼이 너무 좁아서 한 시간만 걸어도 발가락이 아픕니다."])
    ]
  },
  {
    title: "우산 검색하기",
    icon: "우",
    color: "#03c75a",
    budget: 15000,
    situationSlides: [
      "여름철이라 비가 자주 오는데,<br>집에 남은 우산이 구멍 난 것밖에 없습니다.",
      "가방에 쏙 들어가는 걸 살지,<br>크고 튼튼한 걸 살지 정해 봅시다!<br>예산은 15,000원입니다."
    ],
    criteria: ["가격", "튼튼함", "휴대성", "크기", "디자인"],
    products: [
      product("u1", "투명 기본 우산", "펴고 바로 쓰기 좋은 기본 우산", 5000, 0, 4.0, 180, 
        "앞이 투명하게 보여 비 오는 날에도 시야 확보가 잘 되는 기본 비닐 우산입니다. 부담 없이 휴대하기 좋습니다.", 
        ["싸니까 급할 때 막 쓰기 최고. 투명해서 앞이 잘 보여서 안심이네요.", "편의점 우산이랑 똑같음. 장우산이라 가방에 안 들어가서 들고 다녀야 함.", "바람 조금만 불어도 우산이 훌러덩 뒤집어집니다 ㅋㅋ 뼈대가 너무 약해요."]),
      product("u2", "튼튼 자동 우산", "버튼 한 번으로 편하고 바람에도 강하게", 12000, 0, 4.7, 146, 
        "바람에 쉽게 뒤집어지지 않도록 살대가 튼튼하게 만들어진 자동 우산입니다. 버튼 하나로 쉽게 펴고 접을 수 있어 편리합니다.", 
        ["버튼으로 확 펴지니까 버스에서 내릴 때 진짜 편해요.", "태풍 올 때 썼는데 안 뒤집어지고 진짜 튼튼하네요 인정!", "가방에 넣으려고 3단 우산인 줄 알았는데 자동이라 그런지 접었을 때 좀 두껍고 무거워요."]),
      product("u3", "초경량 접이식 우산", "가방에 매일 넣고 다니기 좋음", 10000, 0, 4.4, 102, 
        "크기가 작고 무게가 매우 가벼워 가방에 매일 넣고 다녀도 부담이 없는 3단 접이식 우산입니다.", 
        ["무게가 안 느껴져서 맨날 가방에 짱박아두기 좋아요 ㅋㅋ", "비 안 올 때 짐 되는 거 딱 싫어하는데 이건 작아서 휴대성 만점.", "폈을 때 크기가 작아서 비 많이 오는 날은 어깨가 다 젖어요. 보슬비용임."]),
      product("u4", "캐릭터 장우산", "비 오는 날도 기분 좋게", 14000, 2500, 4.5, 59, 
        "귀여운 입체 캐릭터 모양 손잡이가 달린 넉넉한 크기의 장우산입니다. 디자인이 예쁘고 돔 형태로 비를 잘 막아줍니다.", 
        ["손잡이 캐릭터 너무 귀엽고 폈을 때 진짜 커서 가방까지 비 안 맞아요.", "디자인이 예뻐서 애가 비 안 오는 날도 자꾸 들고 나가려고 하네요 ㅎㅎ", "우산이 커서 초등학생이 접어서 들고 다니기엔 길고 거추장스러워요. 배송비도 아쉽."]),
      product("u5", "큰 안전 반사 우산", "비를 많이 막아 주는 넓은 우산", 13000, 0, 4.3, 88, 
        "우산 끝부분에 불빛을 반사하는 테두리가 있어 밤길에도 눈에 잘 띄는 안전 우산입니다. 어른도 함께 쓸 수 있을 만큼 넓습니다.", 
        ["밤에 학원 끝나고 올 때 반사띠 번쩍번쩍해서 차에서 잘 보일 것 같아 안심됩니다.", "크기가 성인용 골프우산 못지않게 커서 비 억수로 올 때 최고임.", "크기가 큰 건 좋은데 애가 바람 불 때 들고 있기 힘들어할 정도로 무게감이 꽤 있어요."])
    ]
  },
  {
    title: "이어폰 검색하기",
    icon: "음",
    color: "#03c75a",
    budget: 20000,
    situationSlides: [
      "온라인 학습을 들어야 하는데<br>쓰던 이어폰에서 한쪽 소리가 안 나옵니다.",
      "집중해서 공부하려면 좋은 이어폰이 필요합니다!<br>예산 20,000원 안에서<br>사용할 새 이어폰을 찾아봅시다."
    ],
    criteria: ["가격", "음질", "착용감", "튼튼함", "AS", "줄 길이"],
    products: [
      product("e1", "초특가 이어폰", "한쪽 5,000원, 부담 없는 가격", 5000, 2500, 3.1, 46, 
        "저렴한 가격에 구매할 수 있는 기본적인 유선 이어폰입니다. 급하게 필요할 때 부담 없이 쓰기 좋은 제품입니다.", 
        ["5천원이면 편의점보다 싸네요. 가격 하나는 최고.", "동영상 강의 들으려고 샀는데 지지직거리는 백색소음이 너무 심해요.", "한 달 만에 왼쪽 안 들림... AS 안 돼서 그냥 버리고 새로 사야겠네요."]),
      product("e2", "기본튼튼 유선 이어폰", "수업용으로 무난한 기본 이어폰", 9000, 0, 4.4, 157, 
        "선이 납작한 모양으로 되어 있어 주머니에 넣어도 쉽게 꼬이지 않는 튼튼한 이어폰입니다. 학생들이나 직장인들이 무난하게 사용합니다.", 
        ["줄이 굵어서 진짜 안 꼬여요. 가방에 대충 던져놔도 튼튼함.", "가격 대비 소리도 무난하고 마이크도 잘 돼서 줌 수업할 때 딱입니다.", "이어팁이 딱딱한 플라스틱이라서 1시간 이상 꽂고 있으면 귓바퀴가 아파요."]),
      product("e3", "컬러팝 이어폰", "여러 색으로 고르는 나만의 이어폰", 13000, 0, 4.2, 93, 
        "민트, 분홍 등 다양하고 눈에 띄는 파스텔톤 색상으로 디자인된 귀여운 이어폰입니다. 선물용이나 디자인을 중시하는 분들에게 좋습니다.", 
        ["민트색 샀는데 실물 색감이 미쳤어요 완전 귀여움 ㅠㅠ", "예쁘긴 한데 소리가 좀 먹먹하게 들립니다. 음악 감상용으론 비추.", "선이 너무 얇아서 어디 살짝 걸리면 끊어질까 봐 조마조마해요."]),
      product("e4", "편안착용 이어폰", "오래 들어도 귀가 편한 부드러운 이어폰", 16000, 0, 4.6, 121, 
        "귀 모양에 맞게 부드러운 실리콘이 감싸주는 형태로 디자인된 이어폰입니다. 작고 가벼워서 오랜 시간 착용해도 귀가 편안합니다.", 
        ["진짜 귀에 쏙 들어가서 3시간 연달아 껴도 하나도 안 아픔!!", "외부 소음 차단 쩔고 베이스 소리도 둥둥 잘 울려퍼집니다.", "가격은 좀 비싸지만 그 값을 하네요. 줄 길이가 살짝 짧은 감은 있습니다."]),
      product("e5", "안심AS 이어폰", "고장 걱정을 줄이는 6개월 AS", 19000, 0, 4.8, 204, 
        "소리가 선명하고 좋은 음질을 제공하는 프리미엄 이어폰입니다. 제품 고장 시 6개월 무상 AS를 지원하여 안심하고 사용할 수 있습니다.", 
        ["소리 진짜 선명하고 맑아요. 비싼 브랜드 이어폰 뺨치네요.", "한쪽 고장 났는데 고객센터 연락하니까 묻지도 따지지도 않고 새 걸로 교환해줌 ㄷㄷ", "성능이나 서비스는 완벽한데 예산 2만원을 꽉 채우는 가격이 학생한텐 약간 부담쓰."])
    ]
  },
  {
    title: "자전거 검색하기",
    icon: "자",
    color: "#03c75a",
    budget: 200000,
    situationSlides: [
      "주말마다 친구들과 동네에서<br>자전거를 타기로 했습니다.<br>안전하게 타려면 꼼꼼하게 알아보고 사야 합니다.",
      "예산 200,000원 안에서<br>튼튼하고 안전한 자전거를 검색해 봅시다!"
    ],
    criteria: ["가격", "기능", "오래 써도 고장나지 않는지", "서비스", "조립해서 오는지", "디자인"],
    products: [
      product("b1", "번개 접이식 자전거", "접어서 보관하는 가성비 자전거", 89000, 0, 4.1, 126, 
        "몸체를 반으로 쉽게 접을 수 있는 소형 자전거입니다. 공간을 적게 차지하여 실내 보관이나 차량으로 이동할 때 매우 편리합니다. 완성된 상태로 조립해서 배송됩니다.", 
        ["접히니까 원룸 현관에 보관하기 딱 좋습니다. 가성비 최고.", "바퀴가 작아서 속도는 잘 안 나요. 동네 마트용으로만 탑니다.", "안장이 너무 딱딱해서 30분 이상 타면 엉덩이 아작납니다. 쿠션 안장 따로 사야 함."]),
      product("b2", "튼튼 통학 자전거", "매일 타기 좋은 튼튼한 기본형", 149000, 0, 4.7, 342, 
        "오르막길에서도 편하게 달릴 수 있는 21단 기어와 비에 젖어도 녹슬지 않는 알루미늄 뼈대로 만들어진 튼튼한 자전거입니다. 완성된 상태로 조립해서 배송됩니다.", 
        ["언덕길 올라갈 때 기어 변속 부드럽게 잘 먹히네요. 성능 대만족.", "뼈대가 진짜 튼튼해 보여서 아들내미 통학용으로 믿고 샀습니다.", "접이식이 아니라서 아파트 복도에 두기엔 공간 차지를 엄청 많이 하네요."]),
      product("b3", "무지개 디자인 자전거", "색상과 바구니가 돋보이는 감성 자전거", 129000, 5000, 4.3, 210, 
        "파스텔톤의 예쁜 색상과 앞부분에 짐을 실을 수 있는 라탄 바구니가 달려 있는 클래식한 디자인의 자전거입니다.", 
        ["디자인 미쳤음 ㅠㅠ 벚꽃 펴서 타고 나갔는데 사진 진짜 예쁘게 나와요.", "바구니에 짐 넣을 수 있어서 은근 실용적입니다.", "기어가 7단밖에 안 돼서 언덕 올라갈 때 허벅지 터질 뻔... 평지용입니다."]),
      product("b4", "안심 프리미엄 자전거", "안전 장비 포함, 오래 탈 수 있는 프리미엄형", 199000, 0, 4.8, 188, 
        "비나 눈이 와도 브레이크가 잘 잡히는 디스크 브레이크를 장착한 고급형 자전거입니다. 헬멧과 야간 후미등 등 안전 장비를 기본으로 제공하며, 완성된 상태로 조립해서 배송됩니다.", 
        ["브레이크 진짜 칼같이 잡혀요. 비 오는 날 탔는데도 안 밀리네요.", "헬멧이랑 라이트 다 주니까 추가로 돈 들일 필요 없어서 오히려 이득인 느낌.", "품질은 완벽한데 20만원 꽉 채우는 가격이라 예산 오버할 뻔했네요."]),
      product("b5", "초특가 반짝 자전거", "69,000원 오늘만 초특가", 69000, 8000, 3.2, 51, 
        "기어가 없는 1단 기어로 매우 저렴하게 판매되는 특가 자전거입니다. 동네에서 가볍게 타기 좋은 목적에 맞게 제작되었습니다. 부품이 오면 직접 조립해야 합니다.", 
        ["6만9천원이면 중고보다 싸네요 ㅋㅋ 자전거 굴러만 가면 되죠 뭐.", "기어가 아예 없는 1단이라 동네 한 바퀴 도는 용도입니다.", "조립하다가 혈압 올라서 쓰러질 뻔.. 설명서도 불친절하고 브레이크 세팅하기도 빡세네요."])
    ]
  }
];

const state = {
  screen: "home",
  missionIndex: 0,
  unlockedMissionIndex: 0,
  scenarioSlideIndex: 0,
  selectedCriteria: [],
  detailProductId: null,
  selectedProductId: null,
  reason: "",
  sortOrder: "default"
};

function product(id, name, ad, price, shippingFee, rating, reviewCount, description, reviews) {
  return {
    id, name, ad, price, shippingFee,
    totalPrice: price + shippingFee,
    rating, reviewCount, description, reviews
  };
}

function currentMission() {
  return missions[state.missionIndex];
}

function currentProduct() {
  const mission = currentMission();
  return mission?.products.find((productItem) => productItem.id === state.selectedProductId);
}

function detailProduct() {
  const mission = currentMission();
  return mission?.products.find((productItem) => productItem.id === state.detailProductId);
}

function money(value) {
  return `${value.toLocaleString("ko-KR")}원`;
}

function getSortedProducts(products) {
  const list = [...products];
  if (state.sortOrder === "priceAsc") return list.sort((a, b) => a.totalPrice - b.totalPrice);
  if (state.sortOrder === "reviewDesc") return list.sort((a, b) => b.reviewCount - a.reviewCount);
  if (state.sortOrder === "dateDesc") return list.reverse();
  return list;
}

function render() {
  const app = document.querySelector("#app");
  app.innerHTML = `
    <div class="topbar">
      <button class="header-back" data-action="back" ${state.screen === "home" ? "disabled" : ""}><span style="margin-right: 4px; font-weight: 800;">←</span> 뒤로 가기</button>
      <div class="brand"><span class="brand-mark">N</span> 합리쇼핑</div>
      <div class="progress">${progressText()}</div>
    </div>
    <section class="screen">${screenMarkup()}</section>
  `;
  bindEvents();
}

function progressText() {
  const labels = {
    home: "쇼핑 홈",
    missions: "미션 목록",
    scenario: `미션 ${state.missionIndex + 1} / ${missions.length}`,
    criteria: "검색 기준 설정",
    shop: "검색 결과",
    detail: "상품 상세",
    writeReason: "선택 이유 작성",
    result: "결제 완료"
  };
  return labels[state.screen] || "";
}


function missionsMarkup() {
  return `
    <div class="section slide-animation">
      <div class="section-head">
        <h2>어떤 물건을 찾아볼까요?</h2>
        <p class="lead">살 물건을 순서대로 선택하여 미션을 깨보세요!</p>
      </div>
      <div class="mission-grid">
        ${missions.map((m, index) => {
          return `
            <button class="mission-card" data-action="go-scenario" data-index="${index}">
              <div class="mission-image" style="background:${m.color}">${m.icon}</div>
              <div class="mission-info">
                <h3>${m.title}</h3>
                <span class="money">예산 ${money(m.budget)}</span>
              </div>
            </button>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function screenMarkup() {
  if (state.screen === "home") return homeMarkup();
  if (state.screen === "missions") return missionsMarkup();
  if (state.screen === "scenario") return scenarioMarkup();
  if (state.screen === "criteria") return criteriaMarkup();
  if (state.screen === "shop") return shopMarkup();
  if (state.screen === "detail") return productDetailMarkup();
  if (state.screen === "writeReason") return writeReasonMarkup();
  if (state.screen === "result") return resultMarkup();
  return homeMarkup();
}

function homeMarkup() {
  return `
    <div class="hero">
      <div class="hero-content">
        <h1>합리적으로 선택해요</h1>
        <p class="hero-desc">무조건 싼 물건이나 무조건 비싼 물건을 고르는 게 아닙니다.<br>나에게 진짜 필요한 기준을 세우고, 꼼꼼하게 비교해서 현명하게 쇼핑해 봅시다.</p>
        <div class="actions">
          <button class="btn primary btn-lg" data-action="start-missions">쇼핑 시작하기</button>
        </div>
      </div>
    </div>
  `;
}

function backScreen() {
  const targets = {
    missions: "home",
    scenario: "missions",
    criteria: "scenario",
    shop: "criteria",
    detail: "shop",
    writeReason: "shop",
    result: "writeReason"
  };
  return targets[state.screen] || "home";
}

function scenarioMarkup() {
  const mission = currentMission();
  const isFirstSlide = state.scenarioSlideIndex === 0;
  
  return `
    <div class="section slide-animation">
      <div class="section-head">
        <div>
          <p class="eyebrow">MISSION ${state.missionIndex + 1}</p>
          <h2>${mission.title}</h2>
        </div>
      </div>
      <div class="scenario">
        <div class="scenario-box story-slide">
          <p class="story-text">${mission.situationSlides[state.scenarioSlideIndex]}</p>
        </div>
        
        ${!isFirstSlide ? `
        <div class="scenario-box budget-tile">
          <div>
            <span>나의 예산</span>
            <strong>${money(mission.budget)}</strong>
          </div>
        </div>
        ` : ''}
      </div>
      <div class="actions">
        ${isFirstSlide 
          ? `<button class="btn primary btn-lg full-width" data-action="next-slide">다음 내용 보기</button>`
          : `<button class="btn ghost btn-lg" data-action="prev-slide">이전</button>
             <button class="btn primary btn-lg" data-action="go" data-screen="criteria" style="flex:1">검색 기준 정하기</button>`
        }
      </div>
    </div>
  `;
}

function criteriaMarkup() {
  const mission = currentMission();
  return `
    <div class="section">
      <div class="section-head">
        <div>
          <p class="eyebrow">${mission.title}</p>
          <h2>검색 전, 나만의 기준 3가지 정하기</h2>
          <p class="lead">내가 물건을 고를 때 가장 중요하게 생각하는 기준 3가지를 골라보세요.</p>
        </div>
      </div>
      <div class="criteria-grid">
        ${mission.criteria.map((criterion) => criterionMarkup(criterion)).join("")}
      </div>
      <div class="rank-list">
        ${[0, 1, 2].map((index) => `<span class="pill">${index + 1}순위: ${state.selectedCriteria[index] || "선택 안 함"}</span>`).join("")}
      </div>
      <div class="actions">
        <button class="btn ghost" data-action="go" data-screen="scenario">상황 다시 보기</button>
        <button class="btn ghost" data-action="reset-criteria">기준 초기화</button>
        <button class="btn primary" data-action="go-shop" ${state.selectedCriteria.length < 3 ? "disabled" : ""}>상품 보러 가기</button>
      </div>
    </div>
  `;
}

function criterionMarkup(criterion) {
  const rank = state.selectedCriteria.indexOf(criterion);
  return `
    <button class="criterion-card ${rank >= 0 ? "is-selected" : ""}" data-action="toggle-criterion" data-value="${criterion}">
      <strong>${criterion}</strong>
      ${rank >= 0 ? `<span class="rank-badge">${rank + 1}</span>` : ""}
    </button>
  `;
}

function shopMarkup() {
  const mission = currentMission();
  const selected = currentProduct();
  return `
    <div class="section shop-container">
      <div class="shopping-head">
        <div class="shop-search">
          <span class="shop-logo">합리쇼핑</span>
          <div class="search-box">
            <span>${mission.title.replace(" 검색하기", "")}</span>
            <button class="search-icon" type="button" aria-label="검색">검색</button>
          </div>
        </div>
        <div class="shop-tabs" aria-label="쇼핑 메뉴">
          <span class="${state.sortOrder === 'default' ? 'is-active' : ''}" data-action="sort" data-value="default">네이버쇼핑 랭킹순</span>
          <span class="${state.sortOrder === 'priceAsc' ? 'is-active' : ''}" data-action="sort" data-value="priceAsc">낮은 가격순</span>
          <span class="${state.sortOrder === 'reviewDesc' ? 'is-active' : ''}" data-action="sort" data-value="reviewDesc">리뷰 많은순</span>
          <span class="${state.sortOrder === 'dateDesc' ? 'is-active' : ''}" data-action="sort" data-value="dateDesc">등록일순</span>
        </div>
      </div>
      <div class="shop-layout">
        <div class="shopping-results">
          <div class="filter-panel">
            <div>
              <strong>내 기준 필터</strong>
              <p>${state.selectedCriteria.map((item, index) => `${index + 1}순위 ${item}`).join(" · ")}</p>
            </div>
            <div class="filter-chips">
              ${mission.criteria.slice(0, 6).map((item) => `<span>${item}</span>`).join("")}
            </div>
          </div>
          <div class="result-toolbar">
            <span>상품 <strong>${mission.products.length}</strong>개</span>
          </div>
          <div class="product-list">
            ${getSortedProducts(mission.products).map((item, index) => productCardMarkup(item, mission, index)).join("")}
          </div>
        </div>
        <aside class="side-panel">
          <div class="score-box sticky-box">
            <h3>내 선택 기준</h3>
            <div class="rank-list-vertical">
              ${state.selectedCriteria.map((item, index) => `<span class="pill">${index + 1}순위 ${item}</span>`).join("")}
            </div>
            <hr>
            <h3>장바구니</h3>
            <p class="lead selected-name">${selected ? selected.name : "비어있음"}</p>
            <button class="btn primary full-width" data-action="buy" ${selected ? "" : "disabled"}>결제하기</button>
            <button class="btn ghost full-width" data-action="go" data-screen="criteria" style="margin-top:8px">기준 다시 정하기</button>
          </div>
        </aside>
      </div>
    </div>
  `;
}

function productCardMarkup(item, mission, index) {
  const selected = item.id === state.selectedProductId;
  return `
    <article class="product-card ${selected ? "selected" : ""}">
      <button class="product-open" data-action="open-product" data-id="${item.id}">
        <div class="product-art" style="background:#fff; position: relative;">
          <img src="images/${item.id}.png" style="width:100%; height:100%; object-fit:cover; border-radius:var(--radius-md);" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
          <span style="color:#adb5bd; font-size: 24px; display: none; align-items:center; justify-content:center; width:100%; height:100%; background:#e9ecef; border-radius:var(--radius-md);">${mission.icon}${index + 1}</span>
        </div>
        <div class="product-main">
          <div class="product-name-line">
            <h3>${item.name}</h3>
          </div>
          <p class="ad">${item.ad}</p>
          <div class="price-line">
            <strong>${money(item.totalPrice)}</strong>
          </div>
          <div class="badges">
             ${item.shippingFee === 0 ? '<span class="badge badge-free">무료배송</span>' : ''}
             ${index === 3 ? '<span class="badge badge-sale">특가</span>' : ''}
             <span class="badge badge-npay">N페이+</span>
          </div>
          <div class="shopping-meta">
            <span class="rating">평점 ${item.rating}</span>
            <span class="review">리뷰 ${item.reviewCount.toLocaleString("ko-KR")}</span>
          </div>
        </div>
      </button>
      <div class="seller-box">
        <span class="seller-name">합리 스토어</span>
        <button class="btn ghost buy-mini" data-action="open-product" data-id="${item.id}">${selected ? "상세 보기" : "상품 보기"}</button>
      </div>
    </article>
  `;
}

function productDetailMarkup() {
  const mission = currentMission();
  const item = detailProduct();
  const selected = item.id === state.selectedProductId;
  const remaining = mission.budget - item.totalPrice;
  return `
    <div class="section detail-section">
      <div class="detail-breadcrumb">
        <button class="btn ghost" data-action="go" data-screen="shop">← 뒤로가기</button>
      </div>
      <div class="detail-top">
        <div class="detail-gallery">
          <div class="detail-image" style="background:#fff; position: relative; border: 1px solid var(--line);">
            <img src="images/${item.id}.png" style="width:100%; height:100%; object-fit:contain; border-radius:var(--radius-md);" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <span style="color:#adb5bd; font-size: 48px; display: none; align-items:center; justify-content:center; width:100%; height:100%; background:#e9ecef; border-radius:var(--radius-md);">${mission.icon}</span>
          </div>
        </div>
        <div class="detail-summary">
          <p class="eyebrow">합리 스토어</p>
          <h2>${item.name}</h2>
          <div class="detail-rating">
            <span class="rating-stars">★★★★★ ${item.rating}</span>
            <span class="review-count">${item.reviewCount.toLocaleString("ko-KR")}개 리뷰</span>
          </div>
          <div class="detail-price">
            <strong>${money(item.totalPrice)}</strong>
          </div>
          <div class="badges" style="margin-bottom: 16px;">
             ${item.shippingFee === 0 ? '<span class="badge badge-free">무료배송</span>' : ''}
             <span class="badge badge-npay">N페이+</span>
          </div>
          <table class="detail-specs-table">
            <tbody>
              <tr><th>배송비</th><td>${item.shippingFee ? money(item.shippingFee) : "무료배송"}</td></tr>
              <tr><th>상품가격</th><td>${money(item.price)}</td></tr>
            </tbody>
          </table>
          <div class="purchase-panel">
            <p>내 예산: <strong>${money(mission.budget)}</strong></p>
            <p>남은 예산: <strong class="${remaining < 0 ? "danger" : ""}">${remaining < 0 ? `${money(Math.abs(remaining))} 초과` : money(remaining)}</strong></p>
            <div class="actions">
              <button class="btn ghost" data-action="select-product" data-id="${item.id}">${selected ? "장바구니 담김" : "장바구니 담기"}</button>
              <button class="btn primary" data-action="select-and-buy" data-id="${item.id}">바로 구매</button>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-tabs">
        <span class="is-active">상세정보</span>
        <span>리뷰 ${item.reviewCount}</span>
        <span>Q&A</span>
        <span>반품/교환정보</span>
      </div>
      <div class="detail-content">
        <section class="detail-block">
          <div class="promotional-banner">
            <h3>${item.name}</h3>
            <p class="promo-text">${item.description}</p>
          </div>
        </section>
        <section class="detail-block">
          <h3>리뷰</h3>
          <div class="review-list">
            ${item.reviews.map((text, index) => reviewMarkup(text, item, index)).join("")}
          </div>
        </section>
      </div>
    </div>
  `;
}

function reviewMarkup(text, item, index) {
  const names = ["kim****", "lee****", "park****", "choi****", "jung****"];
  const dates = ["2026.06.18", "2026.06.12", "2026.05.29", "2026.05.17", "2026.05.03"];
  return `
    <article class="review-card">
      <div class="review-header">
        <span class="review-stars">★★★★★</span>
        <div class="review-meta">
          <strong>${names[index % names.length]}</strong>
          <small>${dates[index % dates.length]}</small>
        </div>
      </div>
      <p class="review-body">${text}</p>
    </article>
  `;
}

function writeReasonMarkup() {
  const selected = currentProduct();
  return `
    <div class="section">
      <div class="section-head">
        <div>
          <p class="eyebrow">선택 이유 작성</p>
          <h2>왜 이 물건을 골랐나요?</h2>
          <p class="lead">내가 고른 기준을 바탕으로 이 물건을 선택한 이유를 자세히 적어보세요.</p>
        </div>
      </div>
      <div class="scenario" style="max-width: 600px; margin: 0 auto;">
        <div class="scenario-box">
          <p style="margin-bottom:8px">선택한 물건: <strong>${selected.name}</strong></p>
          <p>내가 세운 기준: <strong>${state.selectedCriteria.join(", ")}</strong></p>
        </div>
        <textarea id="reason-input" class="reason-textarea" placeholder="선택한 이유를 적어주세요.&#10;(예: 디자인이 제일 마음에 들었고, 배송비가 무료라서 내 예산 안에 들어왔기 때문입니다.)">${state.reason}</textarea>
        <div class="actions">
          <button class="btn primary full-width" data-action="submit-reason">최종 결과 확인하기</button>
        </div>
      </div>
    </div>
  `;
}

function resultMarkup() {
  const mission = currentMission();
  const selected = currentProduct();
  const isLastMission = state.missionIndex === missions.length - 1;
  const productIndex = mission.products.findIndex(p => p.id === selected.id);
  const iconText = `${mission.icon}${productIndex + 1}`;

  return `
    <div class="section result-section">
      <div class="result-layout">
        <div id="capture-area" class="capture-card">
          <div class="capture-header">
            <div class="capture-thumb" style="background:#fff; position:relative; overflow:hidden;">
              <img src="images/${selected.id}.png" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
              <span style="display:none; align-items:center; justify-content:center; width:100%; height:100%; background:#e9ecef; color:#adb5bd; font-size:24px;">${iconText}</span>
            </div>
            <h3>나의 합리적 소비 인증서</h3>
            <span class="stamp">선택 완료</span>
          </div>
          <div class="capture-body">
            <div class="capture-row">
              <span class="capture-label">선택한 물건</span>
              <strong>${selected.name}</strong>
            </div>
            <div class="capture-row">
              <span class="capture-label">최종 결제 금액</span>
              <strong>${money(selected.totalPrice)}</strong>
            </div>
            <div class="capture-divider" style="margin: 20px 0;"></div>
            <div class="capture-block">
              <span class="capture-label" style="display:block; margin-bottom:8px;">내가 세운 기준 3가지</span>
              <p>${state.selectedCriteria.map((c, i) => `${i+1}순위: ${c}`).join(" / ")}</p>
            </div>
            <div class="capture-block">
              <span class="capture-label" style="display:block; margin-bottom:8px;">선택한 이유</span>
              <p class="capture-reason-text">${state.reason || "(작성한 이유가 없습니다)"}</p>
            </div>
          </div>
        </div>

        <div class="actions" style="margin-top: 30px;">
          <button class="btn primary full-width" data-action="save-image" style="font-size: 16px; height: 56px;">📷 이미지로 저장하여 공유하기</button>
        </div>
        <div class="actions">
          <button class="btn primary full-width" data-action="go" data-screen="missions">미션 목록으로 돌아가기</button>
        </div>
      </div>
    </div>
  `;
}

function bindEvents() {
  document.querySelectorAll("[data-action]").forEach((element) => {
    element.addEventListener("click", (event) => {
      const target = event.currentTarget;
      const action = target.dataset.action;
      const oldScreen = state.screen;
      
      if (action === "back") {
        if (state.screen === "scenario" && state.scenarioSlideIndex > 0) {
          state.scenarioSlideIndex--;
        } else {
          state.screen = backScreen();
        }
      }
      
      if (action === "go") state.screen = target.dataset.screen;
      
      if (action === "start-missions") {
        state.screen = "missions";
      }
      
      
      if (action === "go-scenario") {
        state.missionIndex = parseInt(target.dataset.index, 10);
        state.scenarioSlideIndex = 0;
        state.selectedCriteria = [];
        state.detailProductId = null;
        state.selectedProductId = null;
        state.reason = "";
        state.sortOrder = "default";
        state.screen = "scenario";
      }
      if (action === "next-slide") {
        state.scenarioSlideIndex++;
      }
      if (action === "prev-slide") {
        state.scenarioSlideIndex--;
      }
      
      if (action === "toggle-criterion") {
        const value = target.dataset.value;
        const existingIndex = state.selectedCriteria.indexOf(value);
        if (existingIndex >= 0) state.selectedCriteria.splice(existingIndex, 1);
        else if (state.selectedCriteria.length < 3) state.selectedCriteria.push(value);
      }
      if (action === "reset-criteria") state.selectedCriteria = [];
      
      if (action === "go-shop") {
        if (state.selectedCriteria.length === 3) {
          state.detailProductId = null;
          state.selectedProductId = null;
          state.reason = "";
          state.sortOrder = "default";
          state.screen = "shop";
        }
      }
      if (action === "open-product") {
        state.detailProductId = target.dataset.id;
        state.screen = "detail";
      }
      if (action === "select-product") state.selectedProductId = target.dataset.id;
      
      if (action === "select-and-buy") {
        state.selectedProductId = target.dataset.id;
        state.reason = "";
        state.screen = "writeReason";
      }
      if (action === "buy") {
        if (state.selectedProductId) {
          state.reason = "";
          state.screen = "writeReason";
        }
      }
      if (action === "submit-reason") {
        const input = document.getElementById("reason-input");
        if (input) state.reason = input.value.replace(/\n/g, "<br>");
        state.screen = "result";
      }
      if (action === "save-image") {
        const captureArea = document.getElementById("capture-area");
        if (captureArea && window.html2canvas) {
          const btn = target;
          const originalText = btn.innerHTML;
          btn.innerHTML = "저장 중...";
          btn.disabled = true;
          window.html2canvas(captureArea, { scale: 2 }).then(canvas => {
            const link = document.createElement("a");
            link.download = "합리적소비_인증샷.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
            btn.innerHTML = originalText;
            btn.disabled = false;
          }).catch(err => {
            console.error(err);
            btn.innerHTML = originalText;
            btn.disabled = false;
            alert("이미지 저장에 실패했습니다.");
          });
          return;
        } else {
          alert("이미지 저장 라이브러리를 불러오지 못했습니다. 새로고침 후 다시 시도해주세요.");
          return;
        }
      }
      if (action === "next-mission") {
        state.missionIndex++;
        state.scenarioSlideIndex = 0;
        state.selectedCriteria = [];
        state.detailProductId = null;
        state.selectedProductId = null;
        state.reason = "";
        state.sortOrder = "default";
        state.screen = "scenario";
      }
      if (action === "finish-all") {
        state.screen = "home";
      }
      if (action === "sort") {
        state.sortOrder = target.dataset.value;
      }
      
      if (action !== "save-image") {
        render();
        if (oldScreen !== state.screen || action === "next-mission" || action === "start-missions") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    });
  });
}

render();
