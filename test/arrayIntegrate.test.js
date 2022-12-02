import arrayIntegrate from '../src/arrayIntegrate.js'
import { test } from 'tap'

test('Test arrayIntegrate', t => {
    t.same()
    const sourceArr = [{
        "ctr": 0.15455084,
        "cpm": 2.2616208,
        "cost": 847.28,
        "campaignId": 273479956618079,
        "ordersSameSKU": 101,
        "unitsOtherSKU": 0,
        "acos": 41.21132,
        "impressions": 374634,
        "units": 104,
        "sales": 2055.94,
        "unitsSameSKU": 104,
        "ordersOtherSKU": 0,
        "salesOtherSKU": 0,
        "cpc": 1.4633507,
        "cpmv": 5.4878626,
        "clicks": 579,
        "salesSameSKU": 2055.94,
        "orders": 101,
        "id": "d82675ca2c9e0413eee5534b0eea0c5d8b358de4 ::: {\"campaignName\":\"咀嚼14P-精准大词\",\"ctr\":0.15455084,\"cpm\":2.2616208,\"unitsOtherSKU\":0,\"acos\":41.21132,\"impressions\":374634,\"units\":104,\"clicks\":579,\"orders\":101,\"unitsSameSKU\":104}",
        "campaignName": "咀嚼14P-精准大词",
        "cvr": 17.443869,
        "hasChild": false,
        "level": 0,
        "key": "0",
        "text": "咀嚼14P-精准大词",
        "type": "campaignName"
    }, {
        "ctr": 0.25437298,
        "cpm": 3.2981646,
        "cost": 535.49,
        "campaignId": 145077010061493,
        "ordersSameSKU": 55,
        "unitsOtherSKU": 0,
        "acos": 48.711906,
        "impressions": 162360,
        "units": 55,
        "sales": 1099.3,
        "unitsSameSKU": 55,
        "ordersOtherSKU": 0,
        "salesOtherSKU": 0,
        "cpc": 1.2965859,
        "cpmv": 6.7707562,
        "clicks": 413,
        "salesSameSKU": 1099.3,
        "orders": 55,
        "id": "96bda8d7d8afdccdf3941c0185e154add01221ca ::: {\"campaignName\":\"咀嚼14P-精准小词\",\"ctr\":0.25437298,\"cpm\":3.2981646,\"unitsOtherSKU\":0,\"acos\":48.711906,\"impressions\":162360,\"units\":55,\"clicks\":413,\"orders\":55,\"unitsSameSKU\":55}",
        "campaignName": "咀嚼14P-精准小词",
        "cvr": 13.317191,
        "hasChild": false,
        "level": 0,
        "key": "1",
        "text": "咀嚼14P-精准小词",
        "type": "campaignName"
    }, {
        "ctr": 0.23328099,
        "cpm": 1.7227898,
        "cost": 266.6,
        "campaignId": 267561042576423,
        "ordersSameSKU": 24,
        "unitsOtherSKU": 0,
        "acos": 52.94725,
        "impressions": 154749,
        "units": 24,
        "sales": 503.52,
        "unitsSameSKU": 24,
        "ordersOtherSKU": 0,
        "salesOtherSKU": 0,
        "cpc": 0.7385042,
        "cpmv": 3.2537851,
        "clicks": 361,
        "salesSameSKU": 503.52,
        "orders": 24,
        "id": "998be69e870f863910f8ba432b78c4743a67d96d ::: {\"campaignName\":\"咀嚼14P-自动-高竞价\",\"ctr\":0.23328099,\"cpm\":1.7227898,\"unitsOtherSKU\":0,\"acos\":52.94725,\"impressions\":154749,\"units\":24,\"clicks\":361,\"orders\":24,\"unitsSameSKU\":24}",
        "campaignName": "咀嚼14P-自动-高竞价",
        "cvr": 6.6481996,
        "hasChild": false,
        "level": 0,
        "key": "2",
        "text": "咀嚼14P-自动-高竞价",
        "type": "campaignName"
    }, {
        "ctr": 0.3221349,
        "cpm": 4.5186114,
        "cost": 523.21,
        "campaignId": 7672687267061,
        "ordersSameSKU": 60,
        "unitsOtherSKU": 0,
        "acos": 44.0635,
        "impressions": 115790,
        "units": 60,
        "sales": 1187.4,
        "unitsSameSKU": 60,
        "ordersOtherSKU": 0,
        "salesOtherSKU": 0,
        "cpc": 1.4027078,
        "cpmv": 10.254771,
        "clicks": 373,
        "salesSameSKU": 1187.4,
        "orders": 60,
        "id": "6496cc232555d2903b8032c3713b544f4a6de16b ::: {\"campaignName\":\"咀嚼14P-主推词-精准大词\",\"ctr\":0.3221349,\"cpm\":4.5186114,\"unitsOtherSKU\":0,\"acos\":44.0635,\"impressions\":115790,\"units\":60,\"clicks\":373,\"orders\":60,\"unitsSameSKU\":60}",
        "campaignName": "咀嚼14P-主推词-精准大词",
        "cvr": 16.08579,
        "hasChild": false,
        "level": 0,
        "key": "3",
        "text": "咀嚼14P-主推词-精准大词",
        "type": "campaignName"
    }, {
        "ctr": 0.22109653,
        "cpm": 2.7694905,
        "cost": 296.87,
        "campaignId": 58626028074620,
        "ordersSameSKU": 34,
        "unitsOtherSKU": 0,
        "acos": 42.88046,
        "impressions": 107193,
        "units": 34,
        "sales": 692.32,
        "unitsSameSKU": 34,
        "ordersOtherSKU": 0,
        "salesOtherSKU": 0,
        "cpc": 1.252616,
        "cpmv": 6.4586306,
        "clicks": 237,
        "salesSameSKU": 692.32,
        "orders": 34,
        "id": "7f89060b3bed0888d883749b18b8d4e596570feb ::: {\"campaignName\":\"咀嚼14P-精准中词\",\"ctr\":0.22109653,\"cpm\":2.7694905,\"unitsOtherSKU\":0,\"acos\":42.88046,\"impressions\":107193,\"units\":34,\"clicks\":237,\"orders\":34,\"unitsSameSKU\":34}",
        "campaignName": "咀嚼14P-精准中词",
        "cvr": 14.345991,
        "hasChild": false,
        "level": 0,
        "key": "4",
        "text": "咀嚼14P-精准中词",
        "type": "campaignName"
    }, {
        "ctr": 0.43011686,
        "cpm": 4.7961287,
        "cost": 441.57,
        "campaignId": 161025210292732,
        "ordersSameSKU": 63,
        "unitsOtherSKU": 0,
        "acos": 36.799953,
        "impressions": 92068,
        "units": 64,
        "sales": 1199.92,
        "unitsSameSKU": 64,
        "ordersOtherSKU": 0,
        "salesOtherSKU": 0,
        "cpc": 1.1150757,
        "cpmv": 13.032975,
        "clicks": 396,
        "salesSameSKU": 1199.92,
        "orders": 63,
        "id": "0d425f0dd91a5300cbb251128fccea02ad32f5e9 ::: {\"campaignName\":\"咀嚼14P-匹配投放\",\"ctr\":0.43011686,\"cpm\":4.7961287,\"unitsOtherSKU\":0,\"acos\":36.799953,\"impressions\":92068,\"units\":64,\"clicks\":396,\"orders\":63,\"unitsSameSKU\":64}",
        "campaignName": "咀嚼14P-匹配投放",
        "cvr": 15.909091,
        "hasChild": false,
        "level": 0,
        "key": "5",
        "text": "咀嚼14P-匹配投放",
        "type": "campaignName"
    }, {
        "ctr": 0.31850785,
        "cpm": 4.223414,
        "cost": 331.5,
        "campaignId": 139018147548443,
        "ordersSameSKU": 48,
        "unitsOtherSKU": 0,
        "acos": 34.50106,
        "impressions": 78491,
        "units": 48,
        "sales": 960.84,
        "unitsSameSKU": 48,
        "ordersOtherSKU": 0,
        "salesOtherSKU": 0,
        "cpc": 1.326,
        "cpmv": 12.241404,
        "clicks": 250,
        "salesSameSKU": 960.84,
        "orders": 48,
        "id": "53e98cc72a3da22ead6755b419ab8754a8c691eb ::: {\"campaignName\":\"咀嚼14P-主推词-精准中词\",\"ctr\":0.31850785,\"cpm\":4.223414,\"unitsOtherSKU\":0,\"acos\":34.50106,\"impressions\":78491,\"units\":48,\"clicks\":250,\"orders\":48,\"unitsSameSKU\":48}",
        "campaignName": "咀嚼14P-主推词-精准中词",
        "cvr": 19.2,
        "hasChild": false,
        "level": 0,
        "key": "6",
        "text": "咀嚼14P-主推词-精准中词",
        "type": "campaignName"
    }, {
        "ctr": 0.1234825,
        "cpm": 1.7306892,
        "cost": 116.33,
        "campaignId": 118652949133384,
        "ordersSameSKU": 13,
        "unitsOtherSKU": 0,
        "acos": 46.210377,
        "impressions": 67216,
        "units": 13,
        "sales": 251.74,
        "unitsSameSKU": 13,
        "ordersOtherSKU": 0,
        "salesOtherSKU": 0,
        "cpc": 1.4015663,
        "cpmv": 3.7452393,
        "clicks": 83,
        "salesSameSKU": 251.74,
        "orders": 13,
        "id": "ea7ee556236c116324ccacac25724386db7df27a ::: {\"campaignName\":\"咀嚼14P-puppy chew toys - 单开\",\"ctr\":0.1234825,\"cpm\":1.7306892,\"unitsOtherSKU\":0,\"acos\":46.210377,\"impressions\":67216,\"units\":13,\"clicks\":83,\"orders\":13,\"unitsSameSKU\":13}",
        "campaignName": "咀嚼14P-puppy chew toys - 单开",
        "cvr": 15.662651,
        "hasChild": false,
        "level": 0,
        "key": "7",
        "text": "咀嚼14P-puppy chew toys - 单开",
        "type": "campaignName"
    }, {
        "ctr": 0.6114661,
        "cpm": 4.7254534,
        "cost": 308.35,
        "campaignId": 30646036157587,
        "ordersSameSKU": 37,
        "unitsOtherSKU": 0,
        "acos": 41.755817,
        "impressions": 65253,
        "units": 37,
        "sales": 738.46,
        "unitsSameSKU": 37,
        "ordersOtherSKU": 0,
        "salesOtherSKU": 0,
        "cpc": 0.772807,
        "cpmv": 11.3168745,
        "clicks": 399,
        "salesSameSKU": 738.46,
        "orders": 37,
        "id": "fd5f2ca7d94f77790b3c0470b3b1624fdbb3818e ::: {\"campaignName\":\"咀嚼14P-竞品投放-新\",\"ctr\":0.6114661,\"cpm\":4.7254534,\"unitsOtherSKU\":0,\"acos\":41.755817,\"impressions\":65253,\"units\":37,\"clicks\":399,\"orders\":37,\"unitsSameSKU\":37}",
        "campaignName": "咀嚼14P-竞品投放-新",
        "cvr": 9.273183,
        "hasChild": false,
        "level": 0,
        "key": "8",
        "text": "咀嚼14P-竞品投放-新",
        "type": "campaignName"
    }, {
        "ctr": 0.34585056,
        "cpm": 4.508969,
        "cost": 293.34,
        "campaignId": 244246487945271,
        "ordersSameSKU": 32,
        "unitsOtherSKU": 0,
        "acos": 50.301804,
        "impressions": 65057,
        "units": 32,
        "sales": 583.16,
        "unitsSameSKU": 32,
        "ordersOtherSKU": 0,
        "salesOtherSKU": 0,
        "cpc": 1.3037333,
        "cpmv": 8.963832,
        "clicks": 225,
        "salesSameSKU": 583.16,
        "orders": 32,
        "id": "4272ccad26b53a1ad30e96cb591a55f83114d3e9 ::: {\"campaignName\":\"咀嚼14P-自动-11月\",\"ctr\":0.34585056,\"cpm\":4.508969,\"unitsOtherSKU\":0,\"acos\":50.301804,\"impressions\":65057,\"units\":32,\"clicks\":225,\"orders\":32,\"unitsSameSKU\":32}",
        "campaignName": "咀嚼14P-自动-11月",
        "cvr": 14.222222,
        "hasChild": false,
        "level": 0,
        "key": "9",
        "text": "咀嚼14P-自动-11月",
        "type": "campaignName"
    }, {
        "ctr": 1.0727158,
        "cpm": 16.203094,
        "cost": 382.15,
        "campaignId": 72903592333643,
        "ordersSameSKU": 41,
        "unitsOtherSKU": 0,
        "acos": 47.19183,
        "impressions": 23585,
        "units": 41,
        "sales": 809.78,
        "unitsSameSKU": 41,
        "ordersOtherSKU": 0,
        "salesOtherSKU": 0,
        "cpc": 1.5104743,
        "cpmv": 34.334534,
        "clicks": 253,
        "salesSameSKU": 809.78,
        "orders": 41,
        "id": "969db41198c2a4e06518afecbffb7212714f6938 ::: {\"campaignName\":\"咀嚼14P-主推词-精准小词\",\"ctr\":1.0727158,\"cpm\":16.203094,\"unitsOtherSKU\":0,\"acos\":47.19183,\"impressions\":23585,\"units\":41,\"clicks\":253,\"orders\":41,\"unitsSameSKU\":41}",
        "campaignName": "咀嚼14P-主推词-精准小词",
        "cvr": 16.205534,
        "hasChild": false,
        "level": 0,
        "key": "10",
        "text": "咀嚼14P-主推词-精准小词",
        "type": "campaignName"
    }, {
        "ctr": 0.5192966,
        "cpm": 6.537826,
        "cost": 110.79,
        "campaignId": 55207366608398,
        "ordersSameSKU": 7,
        "unitsOtherSKU": 0,
        "acos": 75.43919,
        "impressions": 16946,
        "units": 7,
        "sales": 146.86,
        "unitsSameSKU": 7,
        "ordersOtherSKU": 0,
        "salesOtherSKU": 0,
        "cpc": 1.2589773,
        "cpmv": 8.666352,
        "clicks": 88,
        "salesSameSKU": 146.86,
        "orders": 7,
        "id": "768c1caa51e7cde8c7a4a553d121ce89aac2231c ::: {\"campaignName\":\"咀嚼14P-puppy toys\",\"ctr\":0.5192966,\"cpm\":6.537826,\"unitsOtherSKU\":0,\"acos\":75.43919,\"impressions\":16946,\"units\":7,\"clicks\":88,\"orders\":7,\"unitsSameSKU\":7}",
        "campaignName": "咀嚼14P-puppy toys",
        "cvr": 7.9545455,
        "hasChild": false,
        "level": 0,
        "key": "11",
        "text": "咀嚼14P-puppy toys",
        "type": "campaignName"
    }, {
        "ctr": 0.42590505,
        "cpm": 5.8286357,
        "cost": 46.53,
        "campaignId": 97702304409269,
        "ordersSameSKU": 5,
        "unitsOtherSKU": 0,
        "acos": 44.35653,
        "impressions": 7983,
        "units": 5,
        "sales": 104.9,
        "unitsSameSKU": 5,
        "ordersOtherSKU": 0,
        "salesOtherSKU": 0,
        "cpc": 1.3685294,
        "cpmv": 13.140424,
        "clicks": 34,
        "salesSameSKU": 104.9,
        "orders": 5,
        "id": "9940142ef0e4219af5d72ba979800de1069c26a9 ::: {\"campaignName\":\"咀嚼14P-dog chew - 精准大词\",\"ctr\":0.42590505,\"cpm\":5.8286357,\"unitsOtherSKU\":0,\"acos\":44.35653,\"impressions\":7983,\"units\":5,\"clicks\":34,\"orders\":5,\"unitsSameSKU\":5}",
        "campaignName": "咀嚼14P-dog chew - 精准大词",
        "cvr": 14.705882,
        "hasChild": false,
        "level": 0,
        "key": "12",
        "text": "咀嚼14P-dog chew - 精准大词",
        "type": "campaignName"
    }, {
        "ctr": 0.34904015,
        "cpm": 4.7498546,
        "cost": 16.33,
        "campaignId": 157881729986793,
        "ordersSameSKU": 0,
        "unitsOtherSKU": 0,
        "acos": 0,
        "impressions": 3438,
        "units": 0,
        "sales": 0,
        "unitsSameSKU": 0,
        "ordersOtherSKU": 0,
        "salesOtherSKU": 0,
        "cpc": 1.3608333,
        "cpmv": 0,
        "clicks": 12,
        "salesSameSKU": 0,
        "orders": 0,
        "id": "d855824fbc137c19edf11ac2cfae3ee8e555e1af ::: {\"campaignName\":\"咀嚼14P-dog chew - 匹配\",\"ctr\":0.34904015,\"cpm\":4.7498546,\"unitsOtherSKU\":0,\"acos\":0,\"impressions\":3438,\"units\":0,\"clicks\":12,\"orders\":0,\"unitsSameSKU\":0}",
        "campaignName": "咀嚼14P-dog chew - 匹配",
        "cvr": 0,
        "hasChild": false,
        "level": 0,
        "key": "13",
        "text": "咀嚼14P-dog chew - 匹配",
        "type": "campaignName"
    }]
    const toBeIntegratedArr = [{
        "campaignId": "30646036157587",
        "name": "咀嚼14P-竞品投放-新",
        "targetingType": "MANUAL",
        "state": "ENABLED",
        "dynamicBidding": {
            "placementBidding": [],
            "strategy": "AUTO_FOR_SALES"
        },
        "startDate": "2022-05-08",
        "budget": {
            "budgetType": "DAILY",
            "budget": 10
        }
    }, {
        "campaignId": "161025210292732",
        "name": "咀嚼14P-匹配投放",
        "targetingType": "MANUAL",
        "state": "ENABLED",
        "dynamicBidding": {
            "placementBidding": [{
                "percentage": 5,
                "placement": "PLACEMENT_TOP"
            }],
            "strategy": "AUTO_FOR_SALES"
        },
        "startDate": "2022-05-16",
        "budget": {
            "budgetType": "DAILY",
            "budget": 20
        }
    }, {
        "campaignId": "273479956618079",
        "name": "咀嚼14P-精准大词",
        "targetingType": "MANUAL",
        "state": "ENABLED",
        "dynamicBidding": {
            "placementBidding": [{
                "percentage": 25,
                "placement": "PLACEMENT_TOP"
            }],
            "strategy": "MANUAL"
        },
        "startDate": "2022-05-16",
        "budget": {
            "budgetType": "DAILY",
            "budget": 10
        }
    }, {
        "campaignId": "58626028074620",
        "name": "咀嚼14P-精准中词",
        "targetingType": "MANUAL",
        "state": "ENABLED",
        "dynamicBidding": {
            "placementBidding": [],
            "strategy": "MANUAL"
        },
        "startDate": "2022-06-15",
        "budget": {
            "budgetType": "DAILY",
            "budget": 10
        }
    }, {
        "campaignId": "55207366608398",
        "name": "咀嚼14P-puppy toys",
        "targetingType": "MANUAL",
        "state": "PAUSED",
        "dynamicBidding": {
            "placementBidding": [{
                "percentage": 75,
                "placement": "PLACEMENT_TOP"
            }],
            "strategy": "MANUAL"
        },
        "startDate": "2022-07-18",
        "budget": {
            "budgetType": "DAILY",
            "budget": 5
        }
    }, {
        "campaignId": "267561042576423",
        "name": "咀嚼14P-自动-高竞价",
        "targetingType": "AUTO",
        "state": "PAUSED",
        "dynamicBidding": {
            "placementBidding": [{
                "percentage": 5,
                "placement": "PLACEMENT_TOP"
            }],
            "strategy": "AUTO_FOR_SALES"
        },
        "startDate": "2022-08-20",
        "budget": {
            "budgetType": "DAILY",
            "budget": 10
        }
    }, {
        "campaignId": "118652949133384",
        "name": "咀嚼14P-puppy chew toys - 单开",
        "targetingType": "MANUAL",
        "state": "ENABLED",
        "dynamicBidding": {
            "placementBidding": [{
                "percentage": 10,
                "placement": "PLACEMENT_TOP"
            }],
            "strategy": "AUTO_FOR_SALES"
        },
        "startDate": "2022-10-09",
        "budget": {
            "budgetType": "DAILY",
            "budget": 10
        }
    }, {
        "campaignId": "145077010061493",
        "name": "咀嚼14P-精准小词",
        "targetingType": "MANUAL",
        "state": "ENABLED",
        "dynamicBidding": {
            "placementBidding": [],
            "strategy": "MANUAL"
        },
        "startDate": "2021-05-25",
        "budget": {
            "budgetType": "DAILY",
            "budget": 25
        }
    }, {
        "portfolioId": "154443187908331",
        "campaignId": "97702304409269",
        "name": "咀嚼14P-dog chew - 精准大词",
        "targetingType": "MANUAL",
        "state": "PAUSED",
        "dynamicBidding": {
            "placementBidding": [{
                "percentage": 5,
                "placement": "PLACEMENT_TOP"
            }],
            "strategy": "MANUAL"
        },
        "startDate": "2022-10-18",
        "budget": {
            "budgetType": "DAILY",
            "budget": 10
        }
    }, {
        "portfolioId": "154443187908331",
        "campaignId": "157881729986793",
        "name": "咀嚼14P-dog chew - 匹配",
        "targetingType": "MANUAL",
        "state": "PAUSED",
        "dynamicBidding": {
            "placementBidding": [],
            "strategy": "AUTO_FOR_SALES"
        },
        "startDate": "2022-10-18",
        "budget": {
            "budgetType": "DAILY",
            "budget": 20
        }
    }, {
        "campaignId": "72903592333643",
        "name": "咀嚼14P-主推词-精准小词",
        "targetingType": "MANUAL",
        "state": "ENABLED",
        "dynamicBidding": {
            "placementBidding": [{
                "percentage": 20,
                "placement": "PLACEMENT_TOP"
            }],
            "strategy": "MANUAL"
        },
        "startDate": "2022-11-08",
        "budget": {
            "budgetType": "DAILY",
            "budget": 10
        }
    }, {
        "campaignId": "7672687267061",
        "name": "咀嚼14P-主推词-精准大词",
        "targetingType": "MANUAL",
        "state": "ENABLED",
        "dynamicBidding": {
            "placementBidding": [{
                "percentage": 20,
                "placement": "PLACEMENT_TOP"
            }],
            "strategy": "MANUAL"
        },
        "startDate": "2022-11-08",
        "budget": {
            "budgetType": "DAILY",
            "budget": 25
        }
    }, {
        "campaignId": "139018147548443",
        "name": "咀嚼14P-主推词-精准中词",
        "targetingType": "MANUAL",
        "state": "ENABLED",
        "dynamicBidding": {
            "placementBidding": [{
                "percentage": 20,
                "placement": "PLACEMENT_TOP"
            }],
            "strategy": "MANUAL"
        },
        "startDate": "2022-11-08",
        "budget": {
            "budgetType": "DAILY",
            "budget": 30
        }
    }, {
        "campaignId": "244246487945271",
        "name": "咀嚼14P-自动-11月",
        "targetingType": "AUTO",
        "state": "ENABLED",
        "dynamicBidding": {
            "placementBidding": [],
            "strategy": "AUTO_FOR_SALES"
        },
        "startDate": "2022-11-23",
        "budget": {
            "budgetType": "DAILY",
            "budget": 20
        }
    }]
    const res = arrayIntegrate(sourceArr, toBeIntegratedArr, {
        match: (a, b) => String(a.campaignId) === String(b.campaignId),
        properties: ['budget']
    })
    const budgets = res.map(({ budget }) => budget.budget)
    const expected = '10,25,10,25,10,20,30,10,10,20,10,5,10,20'
    t.equal(budgets.join(','), expected)
    t.end()
})