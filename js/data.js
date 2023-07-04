const bestProductList = [
	{
		id: 1,
		modelName: 'S/S DELRAY SHIRT',
		name: 'AMALFI/WAX',
		price: 118000,
		src: './images/bp_01.jpg'
	},
	{
		id: 2,
		modelName: 'S/S LUMEN SHIRT',
		name: 'LUMEN PRINT, BLACK',
		price: 175000,
		src: './images/bp_02.jpg'
	},
	{
		id: 3,
		modelName: 'S/S BOOGIE T-SHIRT',
		name: 'DAHLIA HEAVY STONE WASH',
		price: 175000,
		src: './images/bp_03.jpg'
	},
	{
		id: 4,
		modelName: 'BIG BUCK BANDANA',
		name: 'SOUVENIR PRINT, BLACK',
		price: 58000,
		src: './images/bp_04.jpg'
	},
	{
		id: 5,
		modelName: 'SINGLE KNEE SHORT SMITH',
		name: 'BLUE STONE WASHED',
		price: 135000,
		src: './images/bp_05.jpg'
	},
	{
		id: 6,
		modelName: 'SINGLE KNEE SHORT SMITH',
		name: 'BLACK STONE WASHED',
		price: 135000,
		src: './images/bp_06.jpg'
	},
	{
		id: 7,
		modelName: 'DETROIT JACKET',
		name: 'BLACK/BLACK RINSED',
		price: 288000,
		src: './images/bp_07.jpg'
	},
	{
		id: 8,
		modelName: 'WYNTON BUCKET HAT',
		name: 'JURA/YUCCA STONE WASHED',
		price: 85000,
		src: './images/bp_08.jpg'
	},
]

const newProductList = [{
		id: 1,
		modelName: 'SALEDO JACKET',
		name: 'BLACK LIGHT USED WASH',
		price: 245000,
		src: './images/np_01.jpg',
	},
	{
		id: 2,
		modelName: 'SALEDO JACKET',
		name: 'BLUE STONE WASHED',
		price: 208000,
		src: './images/np_02.jpg',
	},
	{
		id: 3,
		modelName: 'COASTAL PANT',
		name: 'WHITE/BLACK',
		price: 173000,
		src: './images/np_03.jpg',
	},
	{
		id: 4,
		modelName: 'DOUBLE KNEE PANT FAIRFIELD',
		name: 'BLUE HEAVY STONE WASH',
		price: 173000,
		src: './images/np_04.jpg',
	},
	{
		id: 5,
		modelName: 'ISLAND SWIM TRUNKS',
		name: 'KIWI/BLACK',
		price: 108000,
		src: './images/np_05.jpg',
	},
	{
		id: 6,
		modelName: 'ISLAND SWIM TRUNKS',
		name: 'MARINA PRINT, ATOM BLUE/WHITE',
		price: 123000,
		src: './images/np_06.jpg',
	},
	{
		id: 7,
		modelName: 'DELRAY CAP',
		name: 'WALL/CITRON',
		price: 78000,
		src: './images/np_07.jpg',
	},
	{
		id: 8,
		modelName: 'SIBERIAN PARKA KEYCHAIN',
		name: 'GOLD',
		price: 33000,
		src: './images/np_08.jpg',
	},
]

const lookBookProudctList = [{
		propertyNumber: 1,
		modelName: 'S/S MARINA SHIRT',
		name: 'MARINA PRINT, ARCADE',
		price: '145,000',
	},
	{
		propertyNumber: 2,
		modelName: 'DOUBLE KNEE PANT DEARBORN',
		name: 'WAX STONE WASHED',
		price: '168,000',
	},
	{
		propertyNumber: 3,
		modelName: 'BACKLEY CAP',
		name: 'LUPINUS',
		price: '58,000',
	},
	{
		propertyNumber: 4,
		modelName: 'W S/S TAMAS TROPICS SHIRT',
		name: 'TAMAS TROPICS PRINT, PARADISE BIRD',
		price: '168,000',
	},
	{
		propertyNumber: 5,
		modelName: 'W TRISTIN SHORT',
		name: 'WAX RINSED',
		price: '138,000',
	},
	{
		propertyNumber: 6,
		modelName: 'MADISON LOGO CAP',
		name: 'WALL',
		price: '68,000',
	},
	{
		propertyNumber: 7,
		modelName: 'BAYFIELD TOTESTORM BLUE FADED',
		name: 'STORM BLUE FADED',
		price: '108,000',
	},
	{
		propertyNumber: 8,
		modelName: 'S/S BRAXTON SHIRT',
		name: 'WHITE/WHITE',
		price: '118,000',
	},
	{
		propertyNumber: 9,
		modelName: 'LANDON SHORT ROBERTSON',
		name: 'BLUE BLEACHED',
		price: '135,000',
	},
]

const mdsProductList = [{
		propertyNumber: 1,
		nameEng: 'LEAGUE JACKET',
		nameKor: '리그 자켓 블루',
		etc: 'BLUE',
		productNumber: 'CA22FWJAJL00026001',
		price: '₩ 263,000',
	},
	{
		propertyNumber: 2,
		nameEng: 'LEAGUE JACKET',
		nameKor: '리그 자켓 펜스 와이어',
		etc: 'FENCE WIRE',
		productNumber: 'CA22FWJAJL10290001',
		price: '₩ 263,000',
	},
	{
		propertyNumber: 3,
		nameEng: 'MONTANA BLAZER',
		nameKor: '몬타나 블레이저 시위드',
		etc: 'SEAWEED',
		productNumber: 'CA22FWJAJL10066001',
		price: '₩ 243,000',
	},
	{
		propertyNumber: 4,
		nameEng: 'S/S MIRAGE SHIRT',
		nameKor: '반팔 미라지 셔츠 미라지 프린트, 프로스티드 블루',
		etc: 'MIRAGE PRINT, FROSTED BLUE',
		productNumber: 'CA22SSSHSS09401001',
		price: '₩ 135,000',
	},
]

const sub_page_product_list = [
	/* 	컬러,
		할인율,
		판매량,
		새로 나온것,
		품절된것인지, */

	/***************** jaket ******************/
	{
		propertyNumber: 1,
		productNameKor: `알링턴 베스트 에일 헤비 스톤 워시`,
		productModelName: `ALE HEAVY STONE WASH`,
		productColor: `brown`,
		productStyle: `jaket`,
		price: 283000,
		priceRate: "250000~500000",
		imgSrc: [`./images/sub_page_img/CA22FWJAJH10144002/CA22FWJAJH10144002-1.jpg`, `./images/sub_page_img/CA22FWJAJH10144002/CA22FWJAJH10144002-0.jpg`],
		isNew: true,
		isBest: true,
		isSales: true,
		isSalesRate: 40 / 100, // 곱하기 해주기
		isSalesRateValue: `30~50`,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`jaket`,`자켓`,`자`,`ㅈ`,`알링턴`,`${productNameKor}`],
	},
	{
		propertyNumber: 2,
		productNameKor: `코스탈 자켓 블랙/화이트`,
		productModelName: `COASTAL JACKET BLACK`,
		productColor: `black`,
		productStyle: `jaket`,
		price: 248000,
		priceRate: "150000~250000",
		imgSrc: [`./images/sub_page_img/CA23SSJAJL00358002/CA23SSJAJL00358002-1.jpg`, `./images/sub_page_img/CA23SSJAJL00358002/CA23SSJAJL00358002-0.jpg`],
		isNew: true,
		isBest: true,
		isSales: false,
		//isSalesRate: 1, 
		//isSalesRateValue: ``,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`jaket`,`자켓`,`자`,`ㅈ`,`코스탈`,`${productNameKor}`],
	},
	{
		propertyNumber: 3,
		productNameKor: `코스탈 자켓 화이트/블랙`,
		productModelName: `COASTAL JACKET WHITE`,
		productColor: `white`,
		productStyle: `jaket`,
		price: 248000,
		priceRate: "150000~250000",
		imgSrc: [`./images/sub_page_img/CA23SSJAJL00266002/CA23SSJAJL00266002-1.jpg`, `./images/sub_page_img/CA23SSJAJL00266002/CA23SSJAJL00266002-0.jpg`],
		isNew: true,
		isBest: true,
		isSales: false,
		//isSalesRate: 1, 
		//isSalesRateValue: ``,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`jaket`,`자켓`,`자`,`ㅈ`,`코스탈`,`${productNameKor}`],
	},
	{
		propertyNumber: 4,
		productNameKor: `리그 자켓 블루`,
		productModelName: `LEAGUE JACKET`,
		productColor: `blue`,
		productStyle: `jaket`,
		price: 263000,
		priceRate: "250000~500000",
		imgSrc: [`./images/sub_page_img/CA22FWJAJL00026001/CA22FWJAJL00026001-1.jpg`, `./images/sub_page_img/CA22FWJAJL00026001/CA22FWJAJL00026001-0.jpg`],
		isNew: true,
		isBest: false,
		isSales: true,
		isSalesRate: 40 / 100, // 곱하기 해주기
		isSalesRateValue: `30~50`,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`jaket`,`자켓`,`자`,`ㅈ`,`리그`,`${productNameKor}`],
	},
	{
		propertyNumber: 5,
		productNameKor: `레터맨 자켓 블랙/브릭`,
		productModelName: `LETTERMAN JACKET`,
		productColor: `black`,
		productStyle: `jaket`,
		price: 258000,
		priceRate: "250000~500000",
		imgSrc: [`./images/sub_page_img/CA22FWJAJL10171001/CA22FWJAJL10171001-1.jpg`, `./images/sub_page_img/CA22FWJAJL10171001/CA22FWJAJL10171001-0.jpg`],
		isNew: true,
		isBest: false,
		isSales: true,
		isSalesRate: 40 / 100, // 곱하기 해주기
		isSalesRateValue: `30~50`,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`jaket`,`자켓`,`자`,`ㅈ`,`레터맨`,`${productNameKor}`],
	},
	{
		propertyNumber: 6,
		productNameKor: `트레버 자켓 블랙/블랙`,
		productModelName: `TREVOR JACKET`,
		productColor: `black`,
		productStyle: `jaket`,
		price: 343000,
		priceRate: "250000~500000",
		imgSrc: [`./images/sub_page_img/CA22FWJAHS00285001/CA22FWJAHS00285001-1.jpg`, `./images/sub_page_img/CA22FWJAHS00285001/CA22FWJAHS00285001-0.jpg`],
		isNew: true,
		isBest: false,
		isSales: true,
		isSalesRate: 40 / 100, // 곱하기 해주기
		isSalesRateValue: `30~50`,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`jaket`,`자켓`,`자`,`ㅈ`,`트레버`,`${productNameKor}`],
	},

	/***************** shirt ******************/
	{
		propertyNumber: 7,
		productNameKor: `긴팔 매디슨 셔츠 페일 쿼츠/화이트`,
		productModelName: `L/S MADISON SHIRT`,
		productColor: `pink`,
		productStyle: `shirt`,
		price: 113000,
		priceRate: "50000~150000",
		imgSrc: [`./images/sub_page_img/CA22SSSHLS09389001/CA22SSSHLS09389001-1.jpg`, `./images/sub_page_img/CA22SSSHLS09389001/CA22SSSHLS09389001-0.jpg`],
		isNew: true,
		isBest: false,
		isSales: true,
		isSalesRate: 40 / 100, // 곱하기 해주기
		isSalesRateValue: `30~50`,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`shirt`,`셔츠`,`셔`,`ㅅ`,`매디슨`,`${productNameKor}`],
	},
	{
		propertyNumber: 8,
		productNameKor: `매닝 셔츠 자켓 매닝 체크, 다크 엄버/레더`,
		productModelName: `MANNING SHIRT JAC`,
		productColor: `brown`,
		productStyle: `shirt`,
		price: 278000,
		priceRate: "250000~500000",
		imgSrc: [`./images/sub_page_img/CA22FWJAJL10139001/CA22FWJAJL10139001-1.jpg`, `./images/sub_page_img/CA22FWJAJL10139001/CA22FWJAJL10139001-0.jpg`],
		isNew: true,
		isBest: false,
		isSales: true,
		isSalesRate: 40 / 100, // 곱하기 해주기
		isSalesRateValue: `30~50`,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`shirt`,`셔츠`,`셔`,`ㅅ`,`매닝`,`${productNameKor}`],
	},
	{
		propertyNumber: 9,
		productNameKor: `몬트레이 셔츠 자켓 키위 원 워시드`,
		productModelName: `MONTEREY SHIRT JAC`,
		productColor: `green`,
		productStyle: `shirt`,
		price: 218000,
		priceRate: "150000~250000",
		imgSrc: [`./images/sub_page_img/CA23SSJAJL11129001/CA23SSJAJL11129001-1.jpg`, `./images/sub_page_img/CA23SSJAJL11129001/CA23SSJAJL11129001-0.jpg`],
		isNew: true,
		isBest: false,
		isSales: false,
		//isSalesRate: 1, 
		//isSalesRateValue: ``,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`shirt`,`셔츠`,`셔`,`ㅅ`,`몬트레이`,`${productNameKor}`],
	},
	{
		propertyNumber: 10,
		productNameKor: `반팔 크래프트 셔츠 쥐라 린스드`,
		productModelName: `S/S CRAFT SHIRT`,
		productColor: `greenDown`,
		productStyle: `shirt`,
		price: 123000,
		priceRate: "50000~150000",
		imgSrc: [`./images/sub_page_img/CA23SSSHSS11170001/CA23SSSHSS11170001-1.jpg`, `./images/sub_page_img/CA23SSSHSS11170001/CA23SSSHSS11170001-0.jpg`],
		isNew: true,
		isBest: false,
		isSales: false,
		//isSalesRate: 1, 
		//isSalesRateValue: ``,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`shirt`,`셔츠`,`셔`,`ㅅ`,`크래프트`,`${productNameKor}`],
	},
	{
		propertyNumber: 11,
		productNameKor: `반팔 델레이 셔츠 아말피/왁스`,
		productModelName: `S/S DELRAY SHIRT`,
		productColor: `blue`,
		productStyle: `shirt`,
		price: 118000,
		priceRate: "50000~150000",
		imgSrc: [`./images/sub_page_img/CA23SSSHSS11171001/CA23SSSHSS11171001-1.jpg`, `./images/sub_page_img/CA23SSSHSS11171001/CA23SSSHSS11171001-0.jpg`],
		isNew: true,
		isBest: false,
		isSales: false,
		//isSalesRate: 1, 
		//isSalesRateValue: ``,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`shirt`,`셔츠`,`셔`,`ㅅ`,`델레이`,`${productNameKor}`],
	},
	{
		propertyNumber: 12,
		productNameKor: `반팔 델레이 셔츠 피닉스/왁스`,
		productModelName: `S/S DELRAY SHIRT`,
		productColor: `orange`,
		productStyle: `shirt`,
		price: 118000,
		priceRate: "50000~150000",
		imgSrc: [`./images/sub_page_img/CA23SSSHSS11172001/CA23SSSHSS11172001-1.jpg`, `./images/sub_page_img/CA23SSSHSS11172001/CA23SSSHSS11172001-0.jpg`],
		isNew: true,
		isBest: false,
		isSales: false,
		//isSalesRate: 1, 
		//isSalesRateValue: ``,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`shirt`,`셔츠`,`셔`,`ㅅ`,`델레이`,`${productNameKor}`],
	},


	/***************** swater ******************/
	{
		propertyNumber: 13,
		productNameKor: `칼하트 스웻셔츠 그레이 헤더/블랙`,
		productModelName: `CARHARTT SWEATSHIRT`,
		productColor: `gray`,
		productStyle: `sweater`,
		price: 138000,
		priceRate: "50000~150000",
		imgSrc: [`./images/sub_page_img/CA23SSSWCR00991001/CA23SSSWCR00991001-1.jpg`, `./images/sub_page_img/CA23SSSWCR00991001/CA23SSSWCR00991001-0.jpg`],
		isNew: false,
		isBest: false,
		isSales: false,
		//isSalesRate: 1, 
		//isSalesRateValue: ``,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`sweater`,`스웨터`,`스`,`ㅅ`,`헤더`,`${productNameKor}`],
	},
	{
		propertyNumber: 14,
		productNameKor: `칼하트 스웻셔츠 트리하우스/화이트`,
		productModelName: `CARHARTT SWEATSHIRT`,
		productColor: `greenDown`,
		productStyle: `sweater`,
		price: 138000,
		priceRate: "50000~150000",
		imgSrc: [`./images/sub_page_img/CA23SSSWCR06655001/CA23SSSWCR06655001-1.jpg`, `./images/sub_page_img/CA23SSSWCR06655001/CA23SSSWCR06655001-0.jpg`],
		isNew: false,
		isBest: false,
		isSales: false,
		//isSalesRate: 1, 
		//isSalesRateValue: ``,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`sweater`,`스웨터`,`스`,`ㅅ`,`트리하우스`,`${productNameKor}`],
	},
	{
		propertyNumber: 15,
		productNameKor: `칼하트 스웻셔츠 루피너스/화이트`,
		productModelName: `CARHARTT SWEATSHIRT`,
		productColor: `purple`,
		productStyle: `sweater`,
		price: 138000,
		priceRate: "50000~150000",
		imgSrc: [`./images/sub_page_img/CA23SSSWCR11284001/CA23SSSWCR11284001-1.jpg`, `./images/sub_page_img/CA23SSSWCR11284001/CA23SSSWCR11284001-0.jpg`],
		isNew: false,
		isBest: false,
		isSales: false,
		//isSalesRate: 1, 
		//isSalesRateValue: ``,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`shirt`,`셔츠`,`셔`,`ㅅ`,`루피너스`,`${productNameKor}`],
	},
	{
		propertyNumber: 16,
		productNameKor: `후디드 칼하트 스웻셔츠 키위/시트론`,
		productModelName: `HOODED CARHARTT SWEATSHIRT`,
		productColor: `green`,
		productStyle: `sweater`,
		price: 148000,
		priceRate: "50000~150000",
		imgSrc: [`./images/sub_page_img/CA23SSSWCR11230001/CA23SSSWCR11230001-1.jpg`, `./images/sub_page_img/CA23SSSWCR11230001/CA23SSSWCR11230001-0.jpg`],
		isNew: false,
		isBest: false,
		isSales: false,
		//isSalesRate: 1, 
		//isSalesRateValue: ``,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`shirt`,`셔츠`,`셔`,`ㅅ`,`키위`,`${productNameKor}`],
	},
	{
		propertyNumber: 17,
		productNameKor: `후디드 로커 스웻셔츠 피닉스/블랙`,
		productModelName: `HOODED LOCKER SWEATSHIRT`,
		productColor: `orange`,
		productStyle: `sweater`,
		price: 153000,
		priceRate: "150000~250000",
		imgSrc: [`./images/sub_page_img/CA23SSSWHO11200001/CA23SSSWHO11200001-1.jpg`, `./images/sub_page_img/CA23SSSWHO11200001/CA23SSSWHO11200001-0.jpg`],
		isNew: false,
		isBest: false,
		isSales: false,
		//isSalesRate: 1, 
		//isSalesRateValue: ``,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`shirt`,`셔츠`,`셔`,`ㅅ`,`로커`,`${productNameKor}`],
	},
	{
		propertyNumber: 18,
		productNameKor: `넬슨 스웻셔츠 피신 가먼트 다이드`,
		productModelName: `NELSON SWEATSHIRT`,
		productColor: `skyBlue`,
		productStyle: `sweater`,
		price: 163000,
		priceRate: "150000~250000",
		imgSrc: [`./images/sub_page_img/CA23SSSWCR11195001/CA23SSSWCR11195001-1.jpg`, `./images/sub_page_img/CA23SSSWCR11195001/CA23SSSWCR11195001-0.jpg`],
		isNew: false,
		isBest: false,
		isSales: false,
		//isSalesRate: 1, 
		//isSalesRateValue: ``,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`shirt`,`셔츠`,`셔`,`ㅅ`,`피신`,`${productNameKor}`],
	},


	/***************** neat ******************/
	{
		propertyNumber: 19,
		productNameKor: `앨비언 가디건 재스퍼 헤더`,
		productModelName: `ALBION CARDIGAN`,
		productColor: `brown`,
		productStyle: `neat`,
		price: 218000,
		priceRate: "150000~250000",
		imgSrc: [`./images/sub_page_img/CA22FWKNKC10174001/CA22FWKNKC10174001-1.jpg`, `./images/sub_page_img/CA22FWKNKC10174001/CA22FWKNKC10174001-0.jpg`],
		isNew: false,
		isBest: false,
		isSales: true,
		isSalesRate: 40 / 100, // 곱하기 해주기
		isSalesRateValue: `30~50`,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`neat`,`니트`,`니`,`ㄴ`,`재스퍼`,`${productNameKor}`],
	},
	{
		propertyNumber: 20,
		productNameKor: `코스트 스테이트 스웨터 화이트`,
		productModelName: `COAST STATE SWEATER`,
		productColor: `gray`,
		productStyle: `neat`,
		price: 185000,
		priceRate: "150000~250000",
		imgSrc: [`./images/sub_page_img/CA23SSKNKP00040001/CA23SSKNKP00040001-1.jpg`, `./images/sub_page_img/CA23SSKNKP00040001/CA23SSKNKP00040001-0.jpg`],
		isNew: false,
		isBest: false,
		isSales: false,
		//isSalesRate: 1, 
		//isSalesRateValue: ``,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`neat`,`니트`,`니`,`ㄴ`,`스테이트`,`${productNameKor}`],
	},
	{
		propertyNumber: 21,
		productNameKor: `매디슨 스웨터 아이시 워터/프로스티드 블루`,
		productModelName: `MADISON SWEATER`,
		productColor: `blue`,
		productStyle: `neat`,
		price: 95000,
		priceRate: "50000~150000",
		imgSrc: [`./images/sub_page_img/CA22SSKNKP09357001/CA22SSKNKP09357001-1.jpg`, `./images/sub_page_img/CA22SSKNKP09357001/CA22SSKNKP09357001-0.jpg`],
		isNew: false,
		isBest: false,
		isSales: true,
		isSalesRate: 40 / 100, // 곱하기 해주기
		isSalesRateValue: `30~50`,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`neat`,`니트`,`니`,`ㄴ`,`아이시`,`${productNameKor}`],
	},
	{
		propertyNumber: 22,
		productNameKor: `스크립트 니트 베스트 내츄럴`,
		productModelName: `SCRIPT KNIT VEST`,
		productColor: `white`,
		productStyle: `neat`,
		price: 98000,
		priceRate: "50000~150000",
		imgSrc: [`./images/sub_page_img/CA22FWKNKP00104001/CA22FWKNKP00104001-1.jpg`, `./images/sub_page_img/CA22FWKNKP00104001/CA22FWKNKP00104001-0.jpg`],
		isNew: false,
		isBest: false,
		isSales: true,
		isSalesRate: 40 / 100, // 곱하기 해주기
		isSalesRateValue: `30~50`,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`neat`,`니트`,`니`,`ㄴ`,`내츄럴`,`${productNameKor}`],
	},
	{
		propertyNumber: 23,
		productNameKor: `알더스 니트 베스트 캐리비안 시`,
		productModelName: `S/S ALDUS KNIT VEST`,
		productColor: `skyBlue`,
		productStyle: `neat`,
		price: 113000,
		priceRate: "50000~150000",
		imgSrc: [`./images/sub_page_img/CA23SSKNKP11280001/CA23SSKNKP11280001-1.jpg`, `./images/sub_page_img/CA23SSKNKP11280001/CA23SSKNKP11280001-0.jpg`],
		isNew: false,
		isBest: false,
		isSales: false,
		//isSalesRate: 1, 
		//isSalesRateValue: ``,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`neat`,`니트`,`니`,`ㄴ`,`캐리비안`,`${productNameKor}`],
	},
	{
		propertyNumber: 24,
		productNameKor: `반팔 켄웨이 니트 폴로 블랙`,
		productModelName: `S/S KENWAY KNIT POLO`,
		productColor: `black`,
		productStyle: `neat`,
		price: 148000,
		priceRate: "50000~150000",
		imgSrc: [`./images/sub_page_img/CA23SSKNKP00002002/CA23SSKNKP00002002-1.jpg`, `./images/sub_page_img/CA23SSKNKP00002002/CA23SSKNKP00002002-0.jpg`],
		isNew: false,
		isBest: false,
		isSales: false,
		//isSalesRate: 1, 
		//isSalesRateValue: ``,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`neat`,`니트`,`니`,`ㄴ`,`폴로`,`${productNameKor}`],
	},


	/***************** t-shirt ******************/
	{
		propertyNumber: 25,
		productNameKor: `반팔 셀리 티셔츠 캐리비안 시`,
		productModelName: `S/S CELLY T-SHIRT`,
		productColor: `blue`,
		productStyle: `TShirt`,
		price: 85000,
		priceRate: "50000~150000",
		imgSrc: [`./images/sub_page_img/CA23SSTSSS11280001/CA23SSTSSS11280001-1.jpg`, `./images/sub_page_img/CA23SSTSSS11280001/CA23SSTSSS11280001-0.jpg`],
		isNew: false,
		isBest: false,
		isSales: false,
		//isSalesRate: 1, 
		//isSalesRateValue: ``,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`TShirt`,`티셔츠`,`티`,`ㅌ`,`캐리비안`,`${productNameKor}`],
	},
	{
		propertyNumber: 26,
		productNameKor: `반팔 코스트 스테이트 티셔츠 화이트`,
		productModelName: `S/S COAST STATE T-SHIRT`,
		productColor: `white`,
		productStyle: `TShirt`,
		price: 98000,
		priceRate: "50000~150000",
		imgSrc: [`./images/sub_page_img/CA23SSTSSS00040026/CA23SSTSSS00040026-1.jpg`, `./images/sub_page_img/CA23SSTSSS00040026/CA23SSTSSS00040026-0.jpg`],
		isNew: false,
		isBest: false,
		isSales: false,
		//isSalesRate: 1, 
		//isSalesRateValue: ``,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`TShirt`,`티셔츠`,`티`,`ㅌ`,`스테이트`,`${productNameKor}`],
	},
	{
		propertyNumber: 27,
		productNameKor: `반팔 히트 스크립트 티셔츠 아렌가`,
		productModelName: `S/S HEAT SCRIPT T-SHIRT`,
		productColor: `purple`,
		productStyle: `TShirt`,
		price: 75000,
		priceRate: "50000~150000",
		imgSrc: [`./images/sub_page_img/CA23SSTSSS11234002/CA23SSTSSS11234002-1.jpg`, `./images/sub_page_img/CA23SSTSSS11234002/CA23SSTSSS11234002-0.jpg`],
		isNew: false,
		isBest: false,
		isSales: false,
		//isSalesRate: 1, 
		//isSalesRateValue: ``,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`TShirt`,`티셔츠`,`티`,`ㅌ`,`스크립트`,`${productNameKor}`],
	},
	{
		propertyNumber: 28,
		productNameKor: `반팔 매뉴얼 티셔츠 달리아 가먼트 다이드`,
		productModelName: `S/S MANUAL T-SHIRT`,
		productColor: `pink`,
		productStyle: `TShirt`,
		price: 93000,
		priceRate: "50000~150000",
		imgSrc: [`./images/sub_page_img/CA23SSTSSS11190002/CA23SSTSSS11190002-1.jpg`, `./images/sub_page_img/CA23SSTSSS11190002/CA23SSTSSS11190002-0.jpg`],
		isNew: false,
		isBest: false,
		isSales: false,
		//isSalesRate: 1, 
		//isSalesRateValue: ``,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`TShirt`,`티셔츠`,`티`,`ㅌ`,`달리아`,`${productNameKor}`],
	},
	{
		propertyNumber: 29,
		productNameKor: `반팔 뉴 프론티어 티셔츠 버팔로`,
		productModelName: `S/S NEW FRONTIER T-SHIRT`,
		productColor: `brown`,
		productStyle: `TShirt`,
		price: 78000,
		priceRate: "50000~150000",
		imgSrc: [`./images/sub_page_img/CA23SSTSSS11110001/CA23SSTSSS11110001-1.jpg`, `./images/sub_page_img/CA23SSTSSS11110001/CA23SSTSSS11110001-0.jpg`],
		isNew: false,
		isBest: false,
		isSales: false,
		//isSalesRate: 1, 
		//isSalesRateValue: ``,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`TShirt`,`티셔츠`,`티`,`ㅌ`,`프론티어`,`${productNameKor}`],
	},
	{
		propertyNumber: 30,
		productNameKor: `반팔 팜 스크립트 티셔츠 블랙`,
		productModelName: `S/S PALM SCRIPT T-SHIRT`,
		productColor: `black`,
		productStyle: `TShirt`,
		price: 75000,
		priceRate: "50000~150000",
		imgSrc: [`./images/sub_page_img/CA23SSTSSS00002018/CA23SSTSSS00002018-1.jpg`, `./images/sub_page_img/CA23SSTSSS00002018/CA23SSTSSS00002018-0.jpg`],
		isNew: false,
		isBest: false,
		isSales: false,
		//isSalesRate: 1, 
		//isSalesRateValue: ``,
		isSoldOut: false,
		isGender: `male`,
		//searchKeword : [`TShirt`,`티셔츠`,`티`,`ㅌ`,`스크립트`,`${productNameKor}`],
	},
]

const detail_page_produdct_list = [
	{
		propertyNumber: 1,
		productNameKor: `코스탈 자켓 블랙/화이트`,
		productModelName: `COASTAL JACKET BLACK`,
		productCode: `CA23SSJAJL00358002`,
		price: 248000,
		imgSrc01:[
			`./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-01.jpg`, 
			`./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-02.jpg`,
			`./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-03.jpg`,
			`./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-04.jpg`, 
			`./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-05.jpg`, 
		],
		imgSrc02: 
		[	
			`./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-01_hover.jpg`, 
			`./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-02_hover.jpg`,
			`./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-03_hover.jpg`,
			`./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-04_hover.jpg`, 
			`./images/detail_page_img/CA23SSJAJL00358002_thumnail/CA23SSJAJL00358002-05_hover.jpg`, 
		],
		limitQuantity: 6,
	},
	{
		propertyNumber: 2,
		productNameKor: `코스탈 자켓 화이트/블랙`,
		productModelName: `COASTAL JACKET WHITE`,
		productCode: `CA23SSJAJL00266002`,
		price: 248000,
		imgSrc01:[
			`./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-01.jpg`, 
			`./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-02.jpg`,
			`./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-03.jpg`,
			`./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-04.jpg`,
			`./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-05.jpg`,
		],
		imgSrc02: 
		[	
			`./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-01_hover.jpg`, 
			`./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-02_hover.jpg`,
			`./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-03_hover.jpg`,
			`./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-04_hover.jpg`,
			`./images/detail_page_img/CA23SSJAJL00266002_thumnail/CA23SSJAJL00266002-05_hover.jpg`,
		],
		limitQuantity: 9,
	},

]

export {
	bestProductList,
	newProductList,
	lookBookProudctList,
	mdsProductList,
	sub_page_product_list,
	detail_page_produdct_list,
};