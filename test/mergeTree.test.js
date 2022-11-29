// import mergeTree from "../src/utils/mergeTree.js";
import Tree from '../src/index.js'
import { test } from 'tap'

const realTree = [{
	"campaignType": "sponsoredProducts",
	"bidding": {
		"adjustments": [{
			"predicate": "placementTop",
			"percentage": 10
		}],
		"strategy": "autoForSales"
	},
	"campaignId": 118652949133384,
	"premiumBidAdjustment": true,
	"dailyBudget": 10,
	"profileId": 2490426330284584,
	"name": "咀嚼14P-puppy chew toys - 单开",
	"targetingType": "manual",
	"id": "63853af90c37c57dbf98ae44",
	"state": "enabled",
	"startDate": "20221009",
	"title": "咀嚼14P-puppy chew toys - 单开",
	"children": [{
		"campaignId": 118652949133384,
		"profileId": 2490426330284584,
		"name": "咀嚼14P-puppy chew toys-单开",
		"id": "63853afd0c37c57dbf98aec5",
		"state": "enabled",
		"adGroupId": 85362647841574,
		"defaultBid": 1.4,
		"title": "咀嚼14P-puppy chew toys-单开",
		"path": "63853af90c37c57dbf98ae44-63853afd0c37c57dbf98aec5",
		"children": []
	}],
	"path": "63853af90c37c57dbf98ae44",
	"key": "63853af90c37c57dbf98ae44"
}, {
	"campaignType": "sponsoredProducts",
	"bidding": {
		"adjustments": [],
		"strategy": "manual"
	},
	"campaignId": 145077010061493,
	"premiumBidAdjustment": false,
	"dailyBudget": 25,
	"profileId": 2490426330284584,
	"name": "咀嚼14P-精准小词",
	"targetingType": "manual",
	"id": "63853af90c37c57dbf98ae4c",
	"state": "enabled",
	"startDate": "20210525",
	"title": "咀嚼14P-精准小词",
	"children": [{
		"campaignId": 145077010061493,
		"profileId": 2490426330284584,
		"name": "咀嚼14P-精准小词-10分-01",
		"id": "63853afd0c37c57dbf98aeb6",
		"state": "enabled",
		"adGroupId": 158066896885591,
		"defaultBid": 1.35,
		"title": "咀嚼14P-精准小词-10分-01",
		"path": "63853af90c37c57dbf98ae4c-63853afd0c37c57dbf98aeb6",
		"children": []
	}, {
		"campaignId": 145077010061493,
		"profileId": 2490426330284584,
		"name": "咀嚼14P-精准小词-10分-02",
		"id": "63853afd0c37c57dbf98aeba",
		"state": "enabled",
		"adGroupId": 217025097663864,
		"defaultBid": 1.35,
		"title": "咀嚼14P-精准小词-10分-02",
		"path": "63853af90c37c57dbf98ae4c-63853afd0c37c57dbf98aeba",
		"children": []
	}, {
		"campaignId": 145077010061493,
		"profileId": 2490426330284584,
		"name": "咀嚼14P-精准小词-9分",
		"id": "63853afd0c37c57dbf98aebb",
		"state": "enabled",
		"adGroupId": 266327270971746,
		"defaultBid": 1.2,
		"title": "咀嚼14P-精准小词-9分",
		"path": "63853af90c37c57dbf98ae4c-63853afd0c37c57dbf98aebb",
		"children": []
	}, {
		"campaignId": 145077010061493,
		"profileId": 2490426330284584,
		"name": "咀嚼14P-精准小词-8分",
		"id": "63853afd0c37c57dbf98aec7",
		"state": "enabled",
		"adGroupId": 56245717119772,
		"defaultBid": 0.85,
		"title": "咀嚼14P-精准小词-8分",
		"path": "63853af90c37c57dbf98ae4c-63853afd0c37c57dbf98aec7",
		"children": []
	}],
	"path": "63853af90c37c57dbf98ae4c",
	"key": "63853af90c37c57dbf98ae4c"
}, {
	"campaignType": "sponsoredProducts",
	"bidding": {
		"adjustments": [],
		"strategy": "manual"
	},
	"campaignId": 42945328304613,
	"premiumBidAdjustment": false,
	"dailyBudget": 20,
	"profileId": 2490426330284584,
	"name": "水果14P-squeak",
	"targetingType": "manual",
	"id": "63853af90c37c57dbf98ae43",
	"state": "enabled",
	"startDate": "20220916",
	"title": "水果14P-squeak",
	"children": [{
		"campaignId": 42945328304613,
		"profileId": 2490426330284584,
		"name": "水果14P-squeak",
		"id": "63853afd0c37c57dbf98aecb",
		"state": "enabled",
		"adGroupId": 9829945296276,
		"defaultBid": 0.66,
		"title": "水果14P-squeak",
		"path": "63853af90c37c57dbf98ae43-63853afd0c37c57dbf98aecb",
		"children": []
	}],
	"path": "63853af90c37c57dbf98ae43",
	"key": "63853af90c37c57dbf98ae43"
}, {
	"campaignType": "sponsoredProducts",
	"bidding": {
		"adjustments": [{
			"predicate": "placementTop",
			"percentage": 20
		}],
		"strategy": "manual"
	},
	"campaignId": 7672687267061,
	"premiumBidAdjustment": true,
	"dailyBudget": 25,
	"profileId": 2490426330284584,
	"name": "咀嚼14P-主推词-精准大词",
	"targetingType": "manual",
	"id": "63853af90c37c57dbf98ae47",
	"state": "enabled",
	"startDate": "20221108",
	"title": "咀嚼14P-主推词-精准大词",
	"children": [{
		"campaignId": 7672687267061,
		"profileId": 2490426330284584,
		"name": "咀嚼14P-主推词-精准大词01",
		"id": "63853afd0c37c57dbf98aeb5",
		"state": "enabled",
		"adGroupId": 147840372152037,
		"defaultBid": 1.2,
		"title": "咀嚼14P-主推词-精准大词01",
		"path": "63853af90c37c57dbf98ae47-63853afd0c37c57dbf98aeb5",
		"children": []
	}],
	"path": "63853af90c37c57dbf98ae47",
	"key": "63853af90c37c57dbf98ae47"
}, {
	"campaignType": "sponsoredProducts",
	"bidding": {
		"adjustments": [{
			"predicate": "placementTop",
			"percentage": 30
		}],
		"strategy": "manual"
	},
	"campaignId": 277150297750041,
	"premiumBidAdjustment": true,
	"dailyBudget": 20,
	"profileId": 2490426330284584,
	"name": "水果14P-竞品投放",
	"targetingType": "manual",
	"id": "63853af90c37c57dbf98ae53",
	"state": "enabled",
	"startDate": "20220212",
	"title": "水果14P-竞品投放",
	"children": [{
		"campaignId": 277150297750041,
		"profileId": 2490426330284584,
		"name": "水果14P-竞品投放",
		"id": "63853afd0c37c57dbf98aeff",
		"state": "enabled",
		"adGroupId": 171358914187415,
		"defaultBid": 0.75,
		"title": "水果14P-竞品投放",
		"path": "63853af90c37c57dbf98ae53-63853afd0c37c57dbf98aeff",
		"children": []
	}],
	"path": "63853af90c37c57dbf98ae53",
	"key": "63853af90c37c57dbf98ae53"
}, {
	"campaignType": "sponsoredProducts",
	"bidding": {
		"adjustments": [],
		"strategy": "manual"
	},
	"campaignId": 18507884345999,
	"premiumBidAdjustment": false,
	"dailyBudget": 25,
	"profileId": 2490426330284584,
	"name": "水果14P-SD-LJ",
	"targetingType": "manual",
	"id": "63853af90c37c57dbf98ae4d",
	"state": "enabled",
	"startDate": "20190506",
	"title": "水果14P-SD-LJ",
	"children": [{
		"campaignId": 18507884345999,
		"profileId": 2490426330284584,
		"name": "水果14P-竞品投放-LJ",
		"id": "63853afd0c37c57dbf98af12",
		"state": "enabled",
		"adGroupId": 138046522888417,
		"defaultBid": 0.31,
		"title": "水果14P-竞品投放-LJ",
		"path": "63853af90c37c57dbf98ae4d-63853afd0c37c57dbf98af12",
		"children": []
	}, {
		"campaignId": 18507884345999,
		"profileId": 2490426330284584,
		"name": "水果14P-大词-词组匹配",
		"id": "63853afd0c37c57dbf98af2b",
		"state": "enabled",
		"adGroupId": 82041014707910,
		"defaultBid": 0.21,
		"title": "水果14P-大词-词组匹配",
		"path": "63853af90c37c57dbf98ae4d-63853afd0c37c57dbf98af2b",
		"children": []
	}, {
		"campaignId": 18507884345999,
		"profileId": 2490426330284584,
		"name": "水果14P-竞品投放2",
		"id": "63853afd0c37c57dbf98af4e",
		"state": "enabled",
		"adGroupId": 59057304579234,
		"defaultBid": 0.47,
		"title": "水果14P-竞品投放2",
		"path": "63853af90c37c57dbf98ae4d-63853afd0c37c57dbf98af4e",
		"children": []
	}, {
		"campaignId": 18507884345999,
		"profileId": 2490426330284584,
		"name": "水果14P-SD-LJ",
		"id": "63853afd0c37c57dbf98af63",
		"state": "enabled",
		"adGroupId": 159415281587186,
		"defaultBid": 0.41,
		"title": "水果14P-SD-LJ",
		"path": "63853af90c37c57dbf98ae4d-63853afd0c37c57dbf98af63",
		"children": []
	}],
	"path": "63853af90c37c57dbf98ae4d",
	"key": "63853af90c37c57dbf98ae4d"
}, {
	"campaignType": "sponsoredProducts",
	"bidding": {
		"adjustments": [{
			"predicate": "placementTop",
			"percentage": 25
		}],
		"strategy": "manual"
	},
	"campaignId": 273479956618079,
	"premiumBidAdjustment": true,
	"dailyBudget": 35,
	"profileId": 2490426330284584,
	"name": "咀嚼14P-精准大词",
	"targetingType": "manual",
	"id": "63853af90c37c57dbf98ae48",
	"state": "enabled",
	"startDate": "20220516",
	"title": "咀嚼14P-精准大词",
	"children": [{
		"campaignId": 273479956618079,
		"profileId": 2490426330284584,
		"name": "咀嚼14P-精准大词-8分",
		"id": "63853afd0c37c57dbf98aec8",
		"state": "enabled",
		"adGroupId": 9567855707120,
		"defaultBid": 0.85,
		"title": "咀嚼14P-精准大词-8分",
		"path": "63853af90c37c57dbf98ae48-63853afd0c37c57dbf98aec8",
		"children": []
	}, {
		"campaignId": 273479956618079,
		"profileId": 2490426330284584,
		"name": "咀嚼14P-精准大词-10分",
		"id": "63853afd0c37c57dbf98aeca",
		"state": "enabled",
		"adGroupId": 215360874980540,
		"defaultBid": 1.2,
		"title": "咀嚼14P-精准大词-10分",
		"path": "63853af90c37c57dbf98ae48-63853afd0c37c57dbf98aeca",
		"children": []
	}],
	"path": "63853af90c37c57dbf98ae48",
	"key": "63853af90c37c57dbf98ae48"
}, {
	"campaignType": "sponsoredProducts",
	"bidding": {
		"adjustments": [],
		"strategy": "autoForSales"
	},
	"campaignId": 213306601481434,
	"premiumBidAdjustment": false,
	"dailyBudget": 20,
	"profileId": 2490426330284584,
	"name": "水果14P-plush",
	"targetingType": "manual",
	"id": "63853af90c37c57dbf98ae51",
	"state": "enabled",
	"startDate": "20220915",
	"title": "水果14P-plush",
	"children": [{
		"campaignId": 213306601481434,
		"profileId": 2490426330284584,
		"name": "水果14P-plush",
		"id": "63853afd0c37c57dbf98aece",
		"state": "enabled",
		"adGroupId": 279801554489354,
		"defaultBid": 0.65,
		"title": "水果14P-plush",
		"path": "63853af90c37c57dbf98ae51-63853afd0c37c57dbf98aece",
		"children": []
	}],
	"path": "63853af90c37c57dbf98ae51",
	"key": "63853af90c37c57dbf98ae51"
}, {
	"campaignType": "sponsoredProducts",
	"bidding": {
		"adjustments": [],
		"strategy": "manual"
	},
	"campaignId": 233507795878964,
	"premiumBidAdjustment": false,
	"dailyBudget": 15,
	"profileId": 2490426330284584,
	"name": "B07NQ83WSN-水果14P-LW",
	"targetingType": "manual",
	"id": "63853af90c37c57dbf98ae54",
	"state": "enabled",
	"startDate": "20190402",
	"title": "B07NQ83WSN-水果14P-LW",
	"children": [{
		"campaignId": 233507795878964,
		"profileId": 2490426330284584,
		"name": "B07NQ83WSN-水果14P-LW精准",
		"id": "63853afd0c37c57dbf98af15",
		"state": "enabled",
		"adGroupId": 202177222367553,
		"defaultBid": 0.6,
		"title": "B07NQ83WSN-水果14P-LW精准",
		"path": "63853af90c37c57dbf98ae54-63853afd0c37c57dbf98af15",
		"children": []
	}, {
		"campaignId": 233507795878964,
		"profileId": 2490426330284584,
		"name": "B07NQ83WSN-水果14P-LW泛精准",
		"id": "63853afd0c37c57dbf98af5e",
		"state": "enabled",
		"adGroupId": 97064698397985,
		"defaultBid": 0.3,
		"title": "B07NQ83WSN-水果14P-LW泛精准",
		"path": "63853af90c37c57dbf98ae54-63853afd0c37c57dbf98af5e",
		"children": []
	}],
	"path": "63853af90c37c57dbf98ae54",
	"key": "63853af90c37c57dbf98ae54"
}, {
	"campaignType": "sponsoredProducts",
	"bidding": {
		"adjustments": [],
		"strategy": "autoForSales"
	},
	"campaignId": 244246487945271,
	"premiumBidAdjustment": false,
	"dailyBudget": 40,
	"profileId": 2490426330284584,
	"name": "咀嚼14P-自动-11月",
	"targetingType": "auto",
	"id": "63853af90c37c57dbf98ae49",
	"state": "enabled",
	"startDate": "20221123",
	"title": "咀嚼14P-自动-11月",
	"children": [{
		"campaignId": 244246487945271,
		"profileId": 2490426330284584,
		"name": "咀嚼14P-自动-11月",
		"id": "63853afd0c37c57dbf98aeb0",
		"state": "enabled",
		"adGroupId": 210334315680466,
		"defaultBid": 0.95,
		"title": "咀嚼14P-自动-11月",
		"path": "63853af90c37c57dbf98ae49-63853afd0c37c57dbf98aeb0",
		"children": []
	}],
	"path": "63853af90c37c57dbf98ae49",
	"key": "63853af90c37c57dbf98ae49"
}, {
	"campaignType": "sponsoredProducts",
	"bidding": {
		"adjustments": [],
		"strategy": "autoForSales"
	},
	"campaignId": 30646036157587,
	"premiumBidAdjustment": false,
	"dailyBudget": 10,
	"profileId": 2490426330284584,
	"name": "咀嚼14P-竞品投放-新",
	"targetingType": "manual",
	"id": "63853af90c37c57dbf98ae4a",
	"state": "enabled",
	"startDate": "20220508",
	"title": "咀嚼14P-竞品投放-新",
	"children": [{
		"campaignId": 30646036157587,
		"profileId": 2490426330284584,
		"name": "咀嚼14P-类目-dog chew toys",
		"id": "63853afd0c37c57dbf98aeb2",
		"state": "enabled",
		"adGroupId": 279205214525879,
		"defaultBid": 0.75,
		"title": "咀嚼14P-类目-dog chew toys",
		"path": "63853af90c37c57dbf98ae4a-63853afd0c37c57dbf98aeb2",
		"children": []
	}, {
		"campaignId": 30646036157587,
		"profileId": 2490426330284584,
		"name": "咀嚼14P-竞品投放-60d高转化",
		"id": "63853afd0c37c57dbf98aeb7",
		"state": "enabled",
		"adGroupId": 174601028972277,
		"defaultBid": 0.75,
		"title": "咀嚼14P-竞品投放-60d高转化",
		"path": "63853af90c37c57dbf98ae4a-63853afd0c37c57dbf98aeb7",
		"children": []
	}],
	"path": "63853af90c37c57dbf98ae4a",
	"key": "63853af90c37c57dbf98ae4a"
}, {
	"campaignType": "sponsoredProducts",
	"bidding": {
		"adjustments": [],
		"strategy": "autoForSales"
	},
	"campaignId": 60134150456747,
	"premiumBidAdjustment": false,
	"dailyBudget": 80,
	"profileId": 2490426330284584,
	"name": "水果14P-AT-新",
	"targetingType": "auto",
	"id": "63853af90c37c57dbf98ae4b",
	"state": "enabled",
	"startDate": "20220823",
	"title": "水果14P-AT-新",
	"children": [{
		"campaignId": 60134150456747,
		"profileId": 2490426330284584,
		"name": "水果14P-AT-新",
		"id": "63853afd0c37c57dbf98aeb1",
		"state": "enabled",
		"adGroupId": 58039301659573,
		"defaultBid": 0.67,
		"title": "水果14P-AT-新",
		"path": "63853af90c37c57dbf98ae4b-63853afd0c37c57dbf98aeb1",
		"children": []
	}],
	"path": "63853af90c37c57dbf98ae4b",
	"key": "63853af90c37c57dbf98ae4b"
}, {
	"campaignType": "sponsoredProducts",
	"bidding": {
		"adjustments": [{
			"predicate": "placementTop",
			"percentage": 10
		}],
		"strategy": "autoForSales"
	},
	"campaignId": 238968992990495,
	"premiumBidAdjustment": true,
	"dailyBudget": 20,
	"profileId": 2490426330284584,
	"name": "水果14P-squeaky dog toys",
	"targetingType": "manual",
	"id": "63853af90c37c57dbf98ae50",
	"state": "enabled",
	"startDate": "20220916",
	"title": "水果14P-squeaky dog toys",
	"children": [{
		"campaignId": 238968992990495,
		"profileId": 2490426330284584,
		"name": "水果14P-squeaky dog toys",
		"id": "63853afd0c37c57dbf98aecc",
		"state": "enabled",
		"adGroupId": 263951826619814,
		"defaultBid": 0.75,
		"title": "水果14P-squeaky dog toys",
		"path": "63853af90c37c57dbf98ae50-63853afd0c37c57dbf98aecc",
		"children": []
	}],
	"path": "63853af90c37c57dbf98ae50",
	"key": "63853af90c37c57dbf98ae50"
}, {
	"campaignType": "sponsoredProducts",
	"bidding": {
		"adjustments": [],
		"strategy": "legacyForSales"
	},
	"campaignId": 210974134555553,
	"premiumBidAdjustment": false,
	"dailyBudget": 1,
	"profileId": 2490426330284584,
	"name": "attests",
	"targetingType": "manual",
	"id": "63853af90c37c57dbf98ae52",
	"state": "enabled",
	"startDate": "20220901",
	"title": "attests",
	"children": [{
		"campaignId": 210974134555553,
		"profileId": 2490426330284584,
		"name": "tst",
		"id": "63853afd0c37c57dbf98aed0",
		"state": "enabled",
		"adGroupId": 207170898121346,
		"defaultBid": 1,
		"title": "tst",
		"path": "63853af90c37c57dbf98ae52-63853afd0c37c57dbf98aed0",
		"children": []
	}],
	"path": "63853af90c37c57dbf98ae52",
	"key": "63853af90c37c57dbf98ae52"
}, {
	"campaignType": "sponsoredProducts",
	"bidding": {
		"adjustments": [{
			"predicate": "placementTop",
			"percentage": 20
		}],
		"strategy": "manual"
	},
	"campaignId": 139018147548443,
	"premiumBidAdjustment": true,
	"dailyBudget": 20,
	"profileId": 2490426330284584,
	"name": "咀嚼14P-主推词-精准中词",
	"targetingType": "manual",
	"id": "63853af90c37c57dbf98ae46",
	"state": "enabled",
	"startDate": "20221108",
	"title": "咀嚼14P-主推词-精准中词",
	"children": [{
		"campaignId": 139018147548443,
		"profileId": 2490426330284584,
		"name": "咀嚼14P-主推词-精准中词01",
		"id": "63853afd0c37c57dbf98aeb3",
		"state": "enabled",
		"adGroupId": 62730163527961,
		"defaultBid": 1.25,
		"title": "咀嚼14P-主推词-精准中词01",
		"path": "63853af90c37c57dbf98ae46-63853afd0c37c57dbf98aeb3",
		"children": []
	}],
	"path": "63853af90c37c57dbf98ae46",
	"key": "63853af90c37c57dbf98ae46"
}, {
	"campaignType": "sponsoredProducts",
	"bidding": {
		"adjustments": [{
			"predicate": "placementTop",
			"percentage": 5
		}],
		"strategy": "autoForSales"
	},
	"campaignId": 161025210292732,
	"premiumBidAdjustment": true,
	"dailyBudget": 40,
	"profileId": 2490426330284584,
	"name": "咀嚼14P-匹配投放",
	"targetingType": "manual",
	"id": "63853af90c37c57dbf98ae4e",
	"state": "enabled",
	"startDate": "20220516",
	"title": "咀嚼14P-匹配投放",
	"children": [{
		"campaignId": 161025210292732,
		"profileId": 2490426330284584,
		"name": "咀嚼14P-短语广泛-10分-短语",
		"id": "63853afd0c37c57dbf98aeb8",
		"state": "enabled",
		"adGroupId": 50596839834997,
		"defaultBid": 0.75,
		"title": "咀嚼14P-短语广泛-10分-短语",
		"path": "63853af90c37c57dbf98ae4e-63853afd0c37c57dbf98aeb8",
		"children": []
	}, {
		"campaignId": 161025210292732,
		"profileId": 2490426330284584,
		"name": "咀嚼14P-匹配-10分-广泛",
		"id": "63853afd0c37c57dbf98aeb9",
		"state": "enabled",
		"adGroupId": 280747990323931,
		"defaultBid": 0.65,
		"title": "咀嚼14P-匹配-10分-广泛",
		"path": "63853af90c37c57dbf98ae4e-63853afd0c37c57dbf98aeb9",
		"children": []
	}],
	"path": "63853af90c37c57dbf98ae4e",
	"key": "63853af90c37c57dbf98ae4e"
}, {
	"campaignType": "sponsoredProducts",
	"bidding": {
		"adjustments": [{
			"predicate": "placementTop",
			"percentage": 20
		}],
		"strategy": "manual"
	},
	"campaignId": 72903592333643,
	"premiumBidAdjustment": true,
	"dailyBudget": 25,
	"profileId": 2490426330284584,
	"name": "咀嚼14P-主推词-精准小词",
	"targetingType": "manual",
	"id": "63853af90c37c57dbf98ae4f",
	"state": "enabled",
	"startDate": "20221108",
	"title": "咀嚼14P-主推词-精准小词",
	"children": [{
		"campaignId": 72903592333643,
		"profileId": 2490426330284584,
		"name": "咀嚼14P-主推词-精准小词01",
		"id": "63853afd0c37c57dbf98aeb4",
		"state": "enabled",
		"adGroupId": 140292171732592,
		"defaultBid": 1.2,
		"title": "咀嚼14P-主推词-精准小词01",
		"path": "63853af90c37c57dbf98ae4f-63853afd0c37c57dbf98aeb4",
		"children": []
	}],
	"path": "63853af90c37c57dbf98ae4f",
	"key": "63853af90c37c57dbf98ae4f"
}, {
	"campaignType": "sponsoredProducts",
	"bidding": {
		"adjustments": [],
		"strategy": "manual"
	},
	"campaignId": 58626028074620,
	"premiumBidAdjustment": false,
	"dailyBudget": 10,
	"profileId": 2490426330284584,
	"name": "咀嚼14P-精准中词",
	"targetingType": "manual",
	"id": "63853af90c37c57dbf98ae45",
	"state": "enabled",
	"startDate": "20220615",
	"title": "咀嚼14P-精准中词",
	"children": [{
		"campaignId": 58626028074620,
		"profileId": 2490426330284584,
		"name": "咀嚼14P-精准中词-9分",
		"id": "63853afd0c37c57dbf98aebc",
		"state": "enabled",
		"adGroupId": 22139409111373,
		"defaultBid": 0.95,
		"title": "咀嚼14P-精准中词-9分",
		"path": "63853af90c37c57dbf98ae45-63853afd0c37c57dbf98aebc",
		"children": []
	}, {
		"campaignId": 58626028074620,
		"profileId": 2490426330284584,
		"name": "咀嚼14P-精准中词-10分",
		"id": "63853afd0c37c57dbf98aebd",
		"state": "enabled",
		"adGroupId": 229130021935053,
		"defaultBid": 1.14,
		"title": "咀嚼14P-精准中词-10分",
		"path": "63853af90c37c57dbf98ae45-63853afd0c37c57dbf98aebd",
		"children": []
	}],
	"path": "63853af90c37c57dbf98ae45",
	"key": "63853af90c37c57dbf98ae45"
}]

test('Test mergeTree with empty array', t => {
    t.same()
    const t1 = []
    const t2 = []
    const tree = new Tree({
        alg: 'stack',
        data: t1,
        key: 'id'
    }).merge(t2)
    t.end()
})

test('Test diff mergeTree', t => {
    t.same()
    const t1 = [{
        name: 'A',
        children: [{
            name: 'B'
        }, {
            name: 'C'
        }, {
            name: 'D'
        }]
    }]
    const t2 = [{
        name: 'A',
        children: [{
            name: 'B'
        }, {
            name: 'C'
        }]
    }]
    const tree = new Tree({
        alg: 'stack',
        data: t1,
        key: 'name'
    }).merge(t2)
    const expected = '[{"name":"A","children":[{"name":"D"}]}]'
    t.equal(JSON.stringify(tree), expected)
    t.end()
})

test('Test real data', t => {
    t.same()
    const keys = ['63853af90c37c57dbf98ae4c-63853afd0c37c57dbf98aeb6', '63853af90c37c57dbf98ae4c']
    const tree = new Tree({
        alg: 'stack',
        data: realTree,
    }).walk(([children, index]) => {
        const child = children[index]
        if(keys.indexOf(child?.path) === -1) {
            return false
        }
        return true
    })
    console.log('tree', JSON.stringify(tree))
    t.end()
})