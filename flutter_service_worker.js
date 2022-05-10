'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f89ef5df0cb421f686abc8e74aed6cda",
"index.html": "16ebc62e2d7180ddaf284ae69402f62c",
"/": "16ebc62e2d7180ddaf284ae69402f62c",
"main.dart.js": "d1b8bd764e41be6d8ac126427cdb065c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "09661c18f9845fb47b5aacfe665f6ce0",
"assets/AssetManifest.json": "c3be5308405ee90dbf79c67db6cf12c6",
"assets/NOTICES": "898052f4df0cf1a3f941afe94ca0e282",
"assets/FontManifest.json": "2b0df439f8a2600c2b08944421531001",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/image_placeholder.png": "ac9784470d999338dadb563a30a87f2b",
"assets/assets/images/others/2.0x/fab_fire.png": "bc47edaac9b8840ce6479ec87870a9ed",
"assets/assets/images/others/2.0x/logo_welcome_vertical.png": "7aea0ee055b449ba4c3fd749aa9c651e",
"assets/assets/images/others/2.0x/logo_small_horizontal.png": "57100113421b93e767c1b9842afa3d64",
"assets/assets/images/others/2.0x/logo_welcome_horizontal.png": "e2029ecdf3a8ee4ee557a6675f19ba31",
"assets/assets/images/others/3.0x/fab_fire.png": "5437440d286f68d8fc8ab4371d2ba3c9",
"assets/assets/images/others/3.0x/logo_welcome_vertical.png": "2f3304636e2d0cefe389bb0c65e5ae65",
"assets/assets/images/others/3.0x/logo_small_horizontal.png": "f114ed8b2bde3ce01b7f528fdec94a0c",
"assets/assets/images/others/3.0x/logo_welcome_horizontal.png": "ecdaad75ff90598253cbcb94c31a5be0",
"assets/assets/images/others/fab_fire.png": "c7cc1cb12f5342e75930633b48e34e25",
"assets/assets/images/others/logo_welcome_vertical.png": "3e83a8a92338e560dcd5a6ec9a565e53",
"assets/assets/images/others/logo_small_horizontal.png": "6840f507a0fe925bf937cb5d5d21baba",
"assets/assets/images/others/logo_welcome_horizontal.png": "31d4ffbf1c45ca2f4a9ffdfc220ee274",
"assets/assets/images/image_errorplace_holder.png": "77e3365c0eac39c6079657ebecf609d0",
"assets/assets/images/icons/ic24_Building_Black.png": "0b4018a885228e32b17224d366a133c0",
"assets/assets/images/icons/ic24_FBA%2520Extinguisher.png": "980f548b881f1afe618e720e5d372ed9",
"assets/assets/images/icons/ic32_Sym3.png": "997c172e66c8d38de750218312e4cae2",
"assets/assets/images/icons/ic24_FBA%2520Approval.png": "b3d595c5b536396e8a2d32daa4751638",
"assets/assets/images/icons/ic24_FBA%2520Infringe.png": "741f19407c7fb0ca798f43ad797ba741",
"assets/assets/images/icons/ic32_Sym2.png": "89493be5557a2dd50bfbd45e96a4f85b",
"assets/assets/images/icons/ic16_Fire.png": "10d2a04ed2fdff54dc3a47f4ae60a538",
"assets/assets/images/icons/ic24_User_Black.png": "bd780f9d0fd078629bc90141143bfff2",
"assets/assets/images/icons/ic16_Time.png": "7341cd9c2ca649a1d2a69113b1c5e86b",
"assets/assets/images/icons/ic16_Navigate.png": "2511403e1b2098828c84e80fe9211a8d",
"assets/assets/images/icons/ic24_Device%2520Alarm.png": "d2ab1ef884296713624d4f6fd4c20bd0",
"assets/assets/images/icons/ic16_Download.png": "073cc81126ab2a63c4a9f599f220d505",
"assets/assets/images/icons/ic16_File%2520download.png": "f757147e8bab3fcd250ecbb638a7218f",
"assets/assets/images/icons/ic32_Sym1.png": "bde1e6d9d5e89d49efd98ac0008eea63",
"assets/assets/images/icons/ic24_FBA%2520Megaphone.png": "6cd4112d4fadd81971b4844bc82fc664",
"assets/assets/images/icons/ic16_mail.png": "461fffb1e7d16d793e7825ad5a42a4f6",
"assets/assets/images/icons/ic32_Sym5.png": "974795f61fbbaa85908f4fdda76ac6b9",
"assets/assets/images/icons/ic32_Sym4.png": "cff6731d5dec21a451ffaf225848046c",
"assets/assets/images/icons/ic24_Home_Black.png": "a8a2a7277ea043aa6af7ed616413f034",
"assets/assets/images/icons/ic16_Battery_on.png": "880e77b1776cc598964e418c1f272946",
"assets/assets/images/icons/ic24_SortIcon.png": "583bb2e5cabc69bf9848d20056b9fa38",
"assets/assets/images/icons/ic16_ZoomIn.png": "90ade4b72463498fa1cebd0d98d57ced",
"assets/assets/images/icons/ic16_Document.png": "90904e6adc9722201c31ba3ce2afbaa4",
"assets/assets/images/icons/ic32_Sym6.png": "2b1908bdc010a5a446c4d4f46b5377e3",
"assets/assets/images/icons/ic16_Plus.png": "baee6b7122443361bccd78b3974932cd",
"assets/assets/images/icons/ic16_Reload.png": "e2d94de681efe2a1dcd51e1c5e48ab87",
"assets/assets/images/icons/ic16_hotline.png": "2e996b78bebc8de354521fe1b5027b71",
"assets/assets/images/icons/2.0x/ic24_Building_Black.png": "1c36c5924ec156d221d24430a7d2444e",
"assets/assets/images/icons/2.0x/ic24_FBA%2520Extinguisher.png": "9eee5a094a7177e1c5b1247bb1e8477e",
"assets/assets/images/icons/2.0x/ic32_Sym3.png": "314d2af7f3a4228ef2b706f5ca53d292",
"assets/assets/images/icons/2.0x/ic24_FBA%2520Approval.png": "1bf08322945e0ade7fee2b5bf22af52c",
"assets/assets/images/icons/2.0x/ic24_FBA%2520Infringe.png": "56b5a1b11ee467ecf2d691185090a835",
"assets/assets/images/icons/2.0x/ic32_Sym2.png": "c52f70076f03088f38416389117fe194",
"assets/assets/images/icons/2.0x/ic16_Fire.png": "8dd002e051f2c62b2a45055f9327ba60",
"assets/assets/images/icons/2.0x/ic24_User_Black.png": "24eea7dc5f9b304c90ab450737634f53",
"assets/assets/images/icons/2.0x/ic16_Time.png": "b5b80314d44631341a3bb6c92b103bde",
"assets/assets/images/icons/2.0x/ic16_Navigate.png": "a997a8cc7d634994be50610d6a285138",
"assets/assets/images/icons/2.0x/ic24_Device%2520Alarm.png": "c340b330c596aaefd447215a66c6f292",
"assets/assets/images/icons/2.0x/ic16_Download.png": "a4340bbce3d738dfc317ecc87e010098",
"assets/assets/images/icons/2.0x/ic16_File%2520download.png": "523c6a10ff7632a81b02b7727141b361",
"assets/assets/images/icons/2.0x/ic32_Sym1.png": "0555de8ea242499ecf311ed56fba2cba",
"assets/assets/images/icons/2.0x/ic24_FBA%2520Megaphone.png": "87656af6d2c06c2e4cba75bfe06c1c62",
"assets/assets/images/icons/2.0x/ic16_mail.png": "a4ecc1eb3166f1a78f366d07b4750f93",
"assets/assets/images/icons/2.0x/ic32_Sym5.png": "251b728e522f09844cd42488c607bb0c",
"assets/assets/images/icons/2.0x/ic32_Sym4.png": "50c49e8d5d7376be87fb67955a751d08",
"assets/assets/images/icons/2.0x/ic24_Home_Black.png": "9ad048e58cd7ee1e8791f0f78a7c4c72",
"assets/assets/images/icons/2.0x/ic16_Battery_on.png": "849b4f2635e09bef13e0c6eac50356ff",
"assets/assets/images/icons/2.0x/ic24_SortIcon.png": "c89c454dbaf44afb951cda49b226c7d6",
"assets/assets/images/icons/2.0x/ic16_ZoomIn.png": "c3d7dfe1c31199d9afdd3a793e1f0269",
"assets/assets/images/icons/2.0x/ic16_Document.png": "2238a0a9b7dd238ad702d875115f641f",
"assets/assets/images/icons/2.0x/ic32_Sym6.png": "92ac19cbe0a38c37438646a16e7dbee7",
"assets/assets/images/icons/2.0x/ic16_Plus.png": "d9f76dd444dc5ee4a3ab58a236d2e9c0",
"assets/assets/images/icons/2.0x/ic16_Reload.png": "29f49bcdf1d9a474c54b8b14965e6217",
"assets/assets/images/icons/2.0x/ic16_hotline.png": "77e57d8de7f19c8d22fba0eb837e3bda",
"assets/assets/images/icons/2.0x/ic24_FireShield_White.png": "a09c4de326ad18e1b2bf6a6719828cc3",
"assets/assets/images/icons/2.0x/ic16_Check.png": "9b828fdcaebd51c8e4c27efbe3cbb7ea",
"assets/assets/images/icons/2.0x/ic24_Delete.png": "5eeab00ccd74c1c1a688b7963362f5ed",
"assets/assets/images/icons/2.0x/ic24_FBA%2520Fire%2520History.png": "6ef1fb07d735d92c50e7992192631482",
"assets/assets/images/icons/2.0x/ic16_User.png": "712b76c8488e400d40e6f71d31effde2",
"assets/assets/images/icons/2.0x/ic16_shop.png": "b8dc22ed9faf42a7382fb8b11287393e",
"assets/assets/images/icons/2.0x/ic24_Notification_White.png": "30aa9912fe1ded9cd5b8804bebf3b604",
"assets/assets/images/icons/2.0x/ic24_BurgerMenu.png": "ff7b7ef781c19f671c3e6725bb161e2e",
"assets/assets/images/icons/2.0x/ic24_Device%2520Gateway.png": "5723e6eb44bdc7c3952d9da6f4b7e4c6",
"assets/assets/images/icons/2.0x/ic24_MoreMenu.png": "cb5b770e577354085f15f5fb320b25c6",
"assets/assets/images/icons/2.0x/ic16_edit%2520account.png": "04df7159e073a9ae8498242a7ed50fe0",
"assets/assets/images/icons/2.0x/ic16_Support.png": "91f6a50929c1f05ea8a2eab4f38b4f93",
"assets/assets/images/icons/2.0x/ic24_SubMenu.png": "d7a83dcfe70866c0ff2044f2168b6737",
"assets/assets/images/icons/2.0x/ic24_filters.png": "8f7df81c9df481097ec48f421ee495d0",
"assets/assets/images/icons/2.0x/ic32_Location_Add.png": "cdde9853f0a75a6f4f5e57efe48eac67",
"assets/assets/images/icons/2.0x/ic16_Device%2520Sensor%25202.png": "eda44f63a12e904a0ce229b389075892",
"assets/assets/images/icons/2.0x/ic16_TeamFire.png": "630ec374986dcbc9f724fab48f5bc626",
"assets/assets/images/icons/2.0x/ic32_Location_Support.png": "2cd6f08878f9cc81eab77ddac58c801a",
"assets/assets/images/icons/2.0x/ic16_Device%2520Gateway.png": "e2c734f22e929b6c8ba32a847eee4f65",
"assets/assets/images/icons/2.0x/ic24_lock.png": "52b847976c6e9897b2ba1cf0fb55903c",
"assets/assets/images/icons/2.0x/ic16_Delete.png": "37315dfd4046b0f516e08818620110a5",
"assets/assets/images/icons/2.0x/ic24_Warning.png": "8cdeac3103e597a47ef6e4453ff6cb22",
"assets/assets/images/icons/2.0x/ic24_Building_White.png": "7ee34cb5d2e9e900199a7faf3f7a03d4",
"assets/assets/images/icons/2.0x/ic24_Edit.png": "a6234064017c71fa3d98d9f2ba9a594d",
"assets/assets/images/icons/2.0x/ic16_Location.png": "a6d19ed82e05a4deaae015bab7eae210",
"assets/assets/images/icons/2.0x/ic24_User_White.png": "32bbe50ef36080f2976ab036ba6e8879",
"assets/assets/images/icons/2.0x/ic32_Location_Hydrant.png": "024d64ee2fc3415d98945102e8989e85",
"assets/assets/images/icons/2.0x/ic16_Hydrant.png": "26f0620da839300ec3a5f91eda1809a3",
"assets/assets/images/icons/2.0x/ic24_Multimedia%2520camera.png": "62199cc743edf1d61a131ee9192ede26",
"assets/assets/images/icons/2.0x/ic16_Calendar.png": "b0028ca798bef5fe74b94250b5f5528d",
"assets/assets/images/icons/2.0x/ic16_More%2520Menu.png": "4633f79cbb4a5a6feeaf393f9637982c",
"assets/assets/images/icons/2.0x/ic16_Battery_off.png": "62136e869c8740cc3bb7430910154e8f",
"assets/assets/images/icons/2.0x/ic16_Logout.png": "509d8cc401e3e21996404da013e24540",
"assets/assets/images/icons/2.0x/ic24_BackMenu.png": "ca0d9c5a715402ef3cb5fdb3e26d4c63",
"assets/assets/images/icons/2.0x/ic16_Truck.png": "a5a789e2fc200aa83d2515f2f57ac089",
"assets/assets/images/icons/2.0x/ic24_3Dot.png": "601f2de6f1158196ec949a0d20c27efe",
"assets/assets/images/icons/2.0x/ic24_Information.png": "be572ec02c844bd5c4f03a1ceca02026",
"assets/assets/images/icons/2.0x/ic32_Location_Fire.png": "38876bc53ba9e8de9c05f41150b2fe84",
"assets/assets/images/icons/2.0x/ic24_Home_White.png": "00376bc86a8638335562947db0e886d1",
"assets/assets/images/icons/2.0x/ic16_CallPhone.png": "0941588cb807a2c08c050ca70afdd43c",
"assets/assets/images/icons/2.0x/ic16_Sensor.png": "09685a009778de7908dbbd1f5721a4d9",
"assets/assets/images/icons/2.0x/ic32_Location_Building.png": "7766f935d6558276004a9f6795706881",
"assets/assets/images/icons/2.0x/ic16_password.png": "68a3c86169320ccc0b2424187d41afb0",
"assets/assets/images/icons/2.0x/ic16_Help.png": "01de0a1a6b3a319a3d058e1afabe9971",
"assets/assets/images/icons/2.0x/ic24_FBA%2520Fighter.png": "3bd22b1231bd9536daba5b8ad49e331d",
"assets/assets/images/icons/2.0x/ic16_File%2520upload.png": "afbd8988ec496ff5f8d50b6d8bb7d2e3",
"assets/assets/images/icons/2.0x/ic96_Notice.png": "a3a7a6d4b35a66c173fbc616583cfbbc",
"assets/assets/images/icons/2.0x/ic16_Search.png": "ac734fe4bb135dcd0bd34f3bb8cba961",
"assets/assets/images/icons/2.0x/ic24_Error.png": "93599f826b54342e59ce098db82c4f84",
"assets/assets/images/icons/2.0x/ic16_Device%2520Sensor.png": "e9d9a1984309e047f4f762a49fa4b635",
"assets/assets/images/icons/2.0x/ic24_Device%2520Sensor%2520Heat.png": "ae759ca0d84d48497dc3850cd7bf9297",
"assets/assets/images/icons/2.0x/ic16_Close.png": "c5096c139cf25eb132b0e3b5f146b885",
"assets/assets/images/icons/2.0x/ic16_Dot.png": "26a6f8bdbd7cb03e22f159a00734ef92",
"assets/assets/images/icons/2.0x/ic32_Location_FireTruck.png": "5723750116dbca3cd401cb8cc56fedc0",
"assets/assets/images/icons/2.0x/ic24_Device%2520Sensor%2520Smoke.png": "997878545e081dfeea51f2e0bd6e7411",
"assets/assets/images/icons/2.0x/ic24_FireShield_Black.png": "c91276e32d05883b090bccba427f923a",
"assets/assets/images/icons/2.0x/ic24_FBA%2520Change.png": "3590c97a7eaf7797be435670f0213e24",
"assets/assets/images/icons/2.0x/ic24_Success.png": "71a7c036732beeab2e1250ebf09e8994",
"assets/assets/images/icons/2.0x/ic24_Download.png": "6d3a90a6b4a9093327d59d5165370070",
"assets/assets/images/icons/2.0x/ic24_File%2520upload.png": "c8dfdf0a02c12315cc7d227f31ce4173",
"assets/assets/images/icons/2.0x/ic16_Device%2520Alarm.png": "f584ce018acfb47369c46eb5ad212693",
"assets/assets/images/icons/2.0x/ic24_Multimedia%2520photo.png": "1cb04a3688661a94f043880ce3345fe3",
"assets/assets/images/icons/2.0x/ic16_Back.png": "ada598eee3de20c942d9590b905c0219",
"assets/assets/images/icons/2.0x/ic24_Close.png": "ffe6e251d25553b545e267352bbf8b5b",
"assets/assets/images/icons/2.0x/ic24_Notification_Black.png": "1b8a4afeddc677f59840db12a7a31b0e",
"assets/assets/images/icons/2.0x/ic16_Arrow_Down.png": "8c48f1bb138542467e3f7f8320fbd55b",
"assets/assets/images/icons/2.0x/ic16_MapLayer.png": "1c7720083e21bca8eefe1ef118df11c7",
"assets/assets/images/icons/2.0x/ic16_ZoomOut.png": "2a0e0ba58ff81d5a06a04c7be65a4614",
"assets/assets/images/icons/2.0x/ic24_File%2520download.png": "d9e5f2d2c8cdd9799f1e830f0f8dc308",
"assets/assets/images/icons/2.0x/ic32_Location_FireStation.png": "dc30e09b22f8aa6af6d2b95004686a5c",
"assets/assets/images/icons/2.0x/ic16_Next.png": "a1eb30721ffff90f42a0cbb5c8d1710a",
"assets/assets/images/icons/2.0x/ic16_Phone.png": "f30d23eec5a2acb28545015487366373",
"assets/assets/images/icons/2.0x/ic16_Edit.png": "50dee2ae7a3597778eb42099cc6a51d0",
"assets/assets/images/icons/2.0x/ic24_FBA%2520Building%2520Check.png": "8f11ed7b5d45e1e527f511400ffe955b",
"assets/assets/images/icons/ic24_FireShield_White.png": "1a7f3cd6a49937bcd47d78ad77c0a868",
"assets/assets/images/icons/ic16_Check.png": "35127a806e3aff7c7df7b6fb5fd0f692",
"assets/assets/images/icons/ic24_Delete.png": "5d06842caa063f539b81420c1507a534",
"assets/assets/images/icons/ic24_FBA%2520Fire%2520History.png": "0e86b6a2852f90c85f100a1e25a08e1c",
"assets/assets/images/icons/ic16_User.png": "e14ca8b61f7fe5c68afa421044adbcc0",
"assets/assets/images/icons/ic16_shop.png": "d788b4fe114e8b8eec2fd06118b365c6",
"assets/assets/images/icons/ic24_Notification_White.png": "2a33aa82449908627fb4ef0fbfa7c684",
"assets/assets/images/icons/ic24_BurgerMenu.png": "b99f039376087ef9c985c0a155fe92f2",
"assets/assets/images/icons/ic24_Device%2520Gateway.png": "a86703212da81c567eb455af6f716364",
"assets/assets/images/icons/ic24_MoreMenu.png": "435a26d961eccd32a58a01bc4ec504ee",
"assets/assets/images/icons/ic16_edit%2520account.png": "43079fdd17bd693a9c7174d30a7aeefe",
"assets/assets/images/icons/ic16_Support.png": "ac5afe2e1475644e18c2f310cbeb1732",
"assets/assets/images/icons/ic24_SubMenu.png": "767b18814363e41a00964b5ed9738bc3",
"assets/assets/images/icons/ic24_filters.png": "97ba5b7f04ff553e60388ba4b16b6b6c",
"assets/assets/images/icons/ic32_Location_Add.png": "c09d96c9782ac6a89f2fbe52d742c154",
"assets/assets/images/icons/ic16_Device%2520Sensor%25202.png": "a3e220ebd4c5ef856046706af394cdcb",
"assets/assets/images/icons/ic16_TeamFire.png": "ded3eb61ea9d1117f23852316553afe8",
"assets/assets/images/icons/ic32_Location_Support.png": "def5912d6bc092025d9062c801649a7e",
"assets/assets/images/icons/3.0x/ic24_Building_Black.png": "bd829d6e43af099e466dcbb431816ce0",
"assets/assets/images/icons/3.0x/ic24_FBA%2520Extinguisher.png": "a763cb05a8532e24d9d5cdf10df3fcbc",
"assets/assets/images/icons/3.0x/ic32_Sym3.png": "8585e34f69145d4cc11faf8ff16b0084",
"assets/assets/images/icons/3.0x/ic24_FBA%2520Approval.png": "562ac64f74501d9671d68282e9471086",
"assets/assets/images/icons/3.0x/ic24_FBA%2520Infringe.png": "45b2927913617c4dce76724d69c0b05d",
"assets/assets/images/icons/3.0x/ic32_Sym2.png": "c28ac80afd07b9687fce53e79899bfac",
"assets/assets/images/icons/3.0x/ic16_Fire.png": "76410955aa9ba556fc04b229c1fabe16",
"assets/assets/images/icons/3.0x/ic24_User_Black.png": "d49e908bd8c5709bd9f2f180fee2b33a",
"assets/assets/images/icons/3.0x/ic16_Time.png": "aa6f2c5d5c349481790d7fedf8fc5a5d",
"assets/assets/images/icons/3.0x/ic16_Navigate.png": "0952bf25ee3dbfb903bda3e03b807108",
"assets/assets/images/icons/3.0x/ic24_Device%2520Alarm.png": "f8aaeafd7f2cc051eed17000ec8a513b",
"assets/assets/images/icons/3.0x/ic16_Download.png": "3da0269007eabffad69b6bfe277a6afa",
"assets/assets/images/icons/3.0x/ic16_File%2520download.png": "377c3945ebffe06fbe19cc829dc6ea59",
"assets/assets/images/icons/3.0x/ic32_Sym1.png": "cae5ced6dd93ed0c73522b88c0e1cf32",
"assets/assets/images/icons/3.0x/ic24_FBA%2520Megaphone.png": "af141d8932bede22fe080395e954d6d6",
"assets/assets/images/icons/3.0x/ic16_mail.png": "e59b43f8d76b5929e2f5b31e90a8deff",
"assets/assets/images/icons/3.0x/ic32_Sym5.png": "e59c7147b71967e0864a9a0ae89d9dc6",
"assets/assets/images/icons/3.0x/ic32_Sym4.png": "bc73c8e90795db498927203e005ff398",
"assets/assets/images/icons/3.0x/ic24_Home_Black.png": "52c7a3796a714f2f038279e7cff2cfa0",
"assets/assets/images/icons/3.0x/ic16_Battery_on.png": "b4b7e7dbea344cf8a9e3e3d95011b037",
"assets/assets/images/icons/3.0x/ic24_SortIcon.png": "6d7168edd6f7d18b00b974964abef4a8",
"assets/assets/images/icons/3.0x/ic16_ZoomIn.png": "b7bb7a3a7453ec5cf4c56172ff0a16d9",
"assets/assets/images/icons/3.0x/ic16_Document.png": "2eae605cf6bf344b81f7c8dcecb624a8",
"assets/assets/images/icons/3.0x/ic32_Sym6.png": "283d35f26de4d35e200b5f4ec99b3065",
"assets/assets/images/icons/3.0x/ic16_Plus.png": "c1ad594b7cc19526b820157c2c0e5b8b",
"assets/assets/images/icons/3.0x/ic16_Reload.png": "29a630ac0a165a5cad7f7afbac723a3d",
"assets/assets/images/icons/3.0x/ic16_hotline.png": "b822c9f6fc21c93d20e440320ce7a89d",
"assets/assets/images/icons/3.0x/ic24_FireShield_White.png": "a793295544600ad508278d94b2800dfc",
"assets/assets/images/icons/3.0x/ic16_Check.png": "a35c8c6c23b9457dcf9daf9df6a9c4c5",
"assets/assets/images/icons/3.0x/ic24_Delete.png": "aafc33c741e85c3c48b48ef89af71004",
"assets/assets/images/icons/3.0x/ic24_FBA%2520Fire%2520History.png": "dcf420bd4ac4d02c9b78808ce4270345",
"assets/assets/images/icons/3.0x/ic16_User.png": "3c25f6eddb3277cdd6e58be20558c533",
"assets/assets/images/icons/3.0x/ic16_shop.png": "d41d423332c0b1a8725306d2156c612c",
"assets/assets/images/icons/3.0x/ic24_Notification_White.png": "f5aec580a9190101ffa8909726247aaf",
"assets/assets/images/icons/3.0x/ic24_BurgerMenu.png": "fb11df18b20eb0ade31c4361f5d7c534",
"assets/assets/images/icons/3.0x/ic24_Device%2520Gateway.png": "13e0cdb144c0b5483a720c88f20667a5",
"assets/assets/images/icons/3.0x/ic24_MoreMenu.png": "eba5b48b0b813c6d2f65427a0c10dd92",
"assets/assets/images/icons/3.0x/ic16_edit%2520account.png": "ba9e6c08567d06bb2e1a2aacc1d54aef",
"assets/assets/images/icons/3.0x/ic16_Support.png": "899bdcc7b9aaf8677329ca033aa2b139",
"assets/assets/images/icons/3.0x/ic24_SubMenu.png": "5174a7bb77196ffefc5bcbebad981bd5",
"assets/assets/images/icons/3.0x/ic24_filters.png": "2577e4f9f51be4e1448a9c811c4cc157",
"assets/assets/images/icons/3.0x/ic32_Location_Add.png": "1c2a521445e8e4b41051b7f91fc6535a",
"assets/assets/images/icons/3.0x/ic16_Device%2520Sensor%25202.png": "6cf5d5a61daa23d5052dfa9b62995250",
"assets/assets/images/icons/3.0x/ic16_TeamFire.png": "4cb9444674854c3398b71976d5e6579b",
"assets/assets/images/icons/3.0x/ic32_Location_Support.png": "e50a547a03af4ce2a13cb19224c2a47d",
"assets/assets/images/icons/3.0x/ic16_Device%2520Gateway.png": "6500d2c02ac7615ca09025b60495ef5e",
"assets/assets/images/icons/3.0x/ic24_lock.png": "416ca4cb710c12c62e26a2c331e8f120",
"assets/assets/images/icons/3.0x/ic16_Delete.png": "f0d6ffa0fec0f19a3fefb892bec44d9d",
"assets/assets/images/icons/3.0x/ic24_Warning.png": "b7438ccead56ddd87c696aad6bcda427",
"assets/assets/images/icons/3.0x/ic24_Building_White.png": "c6a0c9b053d65cd9d5ccbde752220b42",
"assets/assets/images/icons/3.0x/ic24_Edit.png": "2e83bf9c23643ed1b8bea2ed551afdfc",
"assets/assets/images/icons/3.0x/ic16_Location.png": "717ab21d613c7f0e66ad3dd5b56340d4",
"assets/assets/images/icons/3.0x/ic24_User_White.png": "c8a269cb2bbea1a6d3c63dafa30438ee",
"assets/assets/images/icons/3.0x/ic32_Location_Hydrant.png": "76da4be82bf3d615e3430bb268b044c3",
"assets/assets/images/icons/3.0x/ic16_Hydrant.png": "3a1adebe3f6a50b5759f11ff6de080a8",
"assets/assets/images/icons/3.0x/ic24_Multimedia%2520camera.png": "519ce5dafec904e6999d2d5117a71da9",
"assets/assets/images/icons/3.0x/ic16_Calendar.png": "cd82945cce8e4c56108060e884cef3ad",
"assets/assets/images/icons/3.0x/ic16_More%2520Menu.png": "37c7959fb9af6003c533ef75f464c05e",
"assets/assets/images/icons/3.0x/ic16_Battery_off.png": "848aeb8dd7a69e94054b03537559a5d6",
"assets/assets/images/icons/3.0x/ic16_Logout.png": "345deed1eac056773e180acad0ef0c3c",
"assets/assets/images/icons/3.0x/ic24_BackMenu.png": "b0a5a12c235c9e9763252c676eda8862",
"assets/assets/images/icons/3.0x/ic16_Truck.png": "cac22943cf66037189ecb5280d36fac3",
"assets/assets/images/icons/3.0x/ic24_3Dot.png": "fec4cef2f2baeaf24f6a8dea2346ea77",
"assets/assets/images/icons/3.0x/ic24_Information.png": "e639d51c791764e7c7f15513befbe515",
"assets/assets/images/icons/3.0x/ic32_Location_Fire.png": "139daef7172ce0539de6eea2f1c298a4",
"assets/assets/images/icons/3.0x/ic24_Home_White.png": "86ebd4d20bec265418aecfb6778b9d9b",
"assets/assets/images/icons/3.0x/ic16_CallPhone.png": "ce08da130185c6640dd216ca5ad54b2f",
"assets/assets/images/icons/3.0x/ic16_Sensor.png": "5d747f59151c45f51c74e26ff9a1f8fb",
"assets/assets/images/icons/3.0x/ic32_Location_Building.png": "d96dc871031d93d18914d69e813cd49e",
"assets/assets/images/icons/3.0x/ic16_password.png": "9fa7ab4d477b1f96458d9f19279c8bb4",
"assets/assets/images/icons/3.0x/ic16_Help.png": "c0cff7bca5360c25467dd943f0788252",
"assets/assets/images/icons/3.0x/ic24_FBA%2520Fighter.png": "5bd6e9fd7102b743f3c3afe5a075fddd",
"assets/assets/images/icons/3.0x/ic16_File%2520upload.png": "d04097a21d9d9f14bdbaac3271f36e5b",
"assets/assets/images/icons/3.0x/ic96_Notice.png": "fe4eac414ea099874c5aac89b54927f3",
"assets/assets/images/icons/3.0x/ic16_Search.png": "0de259709f285fe0b4717d0ab0f703bb",
"assets/assets/images/icons/3.0x/ic24_Error.png": "6005319787e6ea7a7aec17f189c5a9ef",
"assets/assets/images/icons/3.0x/ic16_Device%2520Sensor.png": "7b9a9aef2abde2debabb7cc4a826e054",
"assets/assets/images/icons/3.0x/ic24_Device%2520Sensor%2520Heat.png": "5ce1f88b850a03ec509cd6848098f3d9",
"assets/assets/images/icons/3.0x/ic16_Close.png": "8f967c33547b5b4a05de9324f6015d1f",
"assets/assets/images/icons/3.0x/ic16_Dot.png": "b0bdac1aed3fd84b6d8a4628b6fa05d0",
"assets/assets/images/icons/3.0x/ic32_Location_FireTruck.png": "ce36641c706a817cdf9db9f173448737",
"assets/assets/images/icons/3.0x/ic24_Device%2520Sensor%2520Smoke.png": "484a9555ffa9e5040ee43aa9899c80b4",
"assets/assets/images/icons/3.0x/ic24_FireShield_Black.png": "ad49a043d70366a4e0652f33a7fffc52",
"assets/assets/images/icons/3.0x/ic24_FBA%2520Change.png": "4f3487109132c49a5e3256a9ed11b828",
"assets/assets/images/icons/3.0x/ic24_Success.png": "c63281b70c0a0c5875ec6ae56779e46b",
"assets/assets/images/icons/3.0x/ic24_Download.png": "e65dcb4b8f454a03d4a5ac39fa2fa25a",
"assets/assets/images/icons/3.0x/ic24_File%2520upload.png": "80402161bf585b3148addd4292362a54",
"assets/assets/images/icons/3.0x/ic16_Device%2520Alarm.png": "a891e3cd252e4803cc3dfa46ff4091b5",
"assets/assets/images/icons/3.0x/ic24_Multimedia%2520photo.png": "7b581dd40c9abe41c27203621d70c665",
"assets/assets/images/icons/3.0x/ic16_Back.png": "3a307f788d73a66afc58b8bf12b56183",
"assets/assets/images/icons/3.0x/ic24_Close.png": "1c40034438d4a660685ff035b6ab90c7",
"assets/assets/images/icons/3.0x/ic24_Notification_Black.png": "ae0e7a07bf61295a090832d4c7573e4a",
"assets/assets/images/icons/3.0x/ic16_Arrow_Down.png": "5b08d97a78860033275d8514b5e4593b",
"assets/assets/images/icons/3.0x/ic16_MapLayer.png": "bbd084f4efc393f48d492472cabc24e7",
"assets/assets/images/icons/3.0x/ic16_ZoomOut.png": "b8cb6457e447e8a2efd438510f010a72",
"assets/assets/images/icons/3.0x/ic24_File%2520download.png": "54493cb5f6870bc2af11bba97ea8b561",
"assets/assets/images/icons/3.0x/ic32_Location_FireStation.png": "bdec55a990a6bfd6e1462dfdecfd935c",
"assets/assets/images/icons/3.0x/ic16_Next.png": "29921a4a3592924c9b8e080b85ec03fb",
"assets/assets/images/icons/3.0x/ic16_Phone.png": "3d5c6b6da89bce4f2c97fb5bd7e374c7",
"assets/assets/images/icons/3.0x/ic16_Edit.png": "9a2701a1870f46986bdc6d1a0d42d429",
"assets/assets/images/icons/3.0x/ic24_FBA%2520Building%2520Check.png": "e4be3d24190643a8d11e876847e8429d",
"assets/assets/images/icons/ic16_Device%2520Gateway.png": "43e0e72155077858e421289cadd3d837",
"assets/assets/images/icons/ic24_lock.png": "8164814d3296af30f97cb0e2e36a7f92",
"assets/assets/images/icons/ic16_Delete.png": "3d4abaa9bffcada9856b9230ca956de5",
"assets/assets/images/icons/ic24_Warning.png": "134e0f6cf5be55fe480f86cd34894347",
"assets/assets/images/icons/ic24_Building_White.png": "77fa4ed3bd688de2f2822eaaea2d743a",
"assets/assets/images/icons/ic24_Edit.png": "25e94c4740567fa4aab013b1b62d667b",
"assets/assets/images/icons/ic16_Location.png": "6e66b441beb719a86ccd7a4290bb3b00",
"assets/assets/images/icons/ic24_User_White.png": "cd52d389f85593c7b0760e3ba9c97fe8",
"assets/assets/images/icons/ic32_Location_Hydrant.png": "01257888e09d0ddc696b8a358ec79ddd",
"assets/assets/images/icons/ic16_Hydrant.png": "7a7c198cdce7b731fa333b00b1da9881",
"assets/assets/images/icons/ic24_Multimedia%2520camera.png": "b07d54c9668d47b2d366e7ef57b4ea5c",
"assets/assets/images/icons/ic16_Calendar.png": "9f09db682a62ef3d048ad90625d0e41b",
"assets/assets/images/icons/ic16_More%2520Menu.png": "68469f7fd3e38c50777ab31fc5f007a7",
"assets/assets/images/icons/ic16_Battery_off.png": "0d3302ff5340c59fa787d04ce54a07eb",
"assets/assets/images/icons/ic16_Logout.png": "a47291cc226e0aa82f7630335b317b4a",
"assets/assets/images/icons/ic24_BackMenu.png": "0ba096336a08b04026539199fa93164a",
"assets/assets/images/icons/ic16_Truck.png": "a581b6464ee34bdc02e1bbbb9cded676",
"assets/assets/images/icons/ic24_3Dot.png": "1e81b462ce938c9f4b27c601a49a10f2",
"assets/assets/images/icons/ic24_Information.png": "9085885d3b6ab3407d559f9d123cb053",
"assets/assets/images/icons/ic32_Location_Fire.png": "bc12fcc2d475621e7eef918f3a14c94d",
"assets/assets/images/icons/ic24_Home_White.png": "136852f975a0aa6ce8b64c1cfc936e83",
"assets/assets/images/icons/ic16_CallPhone.png": "ce3d92ca9467f3d791afa399136b96a2",
"assets/assets/images/icons/ic16_Sensor.png": "434276dc10d31a338f427c02b202daaf",
"assets/assets/images/icons/ic32_Location_Building.png": "c2f6d7860f5a7fcbcc4011baa54e3a22",
"assets/assets/images/icons/ic16_password.png": "2f175474b06795db8ca10a15ccee3c31",
"assets/assets/images/icons/ic16_Help.png": "bf426ac6a93766ee466c74916c74c87b",
"assets/assets/images/icons/ic24_FBA%2520Fighter.png": "4fb82eb143b7481c2de915712204c64d",
"assets/assets/images/icons/ic16_File%2520upload.png": "9acb3b3e49b99ebb8c15143cb160f249",
"assets/assets/images/icons/ic96_Notice.png": "8ac92d44871b2ce37d7411e95d72bbb6",
"assets/assets/images/icons/ic16_Search.png": "aedda6032b899a453ed414e3575ab33d",
"assets/assets/images/icons/ic24_Error.png": "02579c4662035ea90c6c1c3a94205f0b",
"assets/assets/images/icons/ic16_Device%2520Sensor.png": "4213fe4fe6aec331b04870dae7f12ef3",
"assets/assets/images/icons/ic24_Device%2520Sensor%2520Heat.png": "782710ac624fdc7c26ca22ad75ef8f1d",
"assets/assets/images/icons/ic16_Close.png": "73e341d6c8bd2361a08b262e57a007d0",
"assets/assets/images/icons/ic16_Dot.png": "aeeb15de970a6b7c7f47514eb72d08d0",
"assets/assets/images/icons/ic32_Location_FireTruck.png": "ce0e52b88fee9cf3de32ae984612ab3e",
"assets/assets/images/icons/ic24_Device%2520Sensor%2520Smoke.png": "5ab11db4636f75b0ed7205245df51fc3",
"assets/assets/images/icons/ic24_FireShield_Black.png": "3f2e14b47ae1b2c083458afdc6e3cf84",
"assets/assets/images/icons/ic24_FBA%2520Change.png": "574ba520389eed120c2be234c6053659",
"assets/assets/images/icons/ic24_Success.png": "95189f86f67e0775eade20a292465113",
"assets/assets/images/icons/ic24_Download.png": "c01d6be4e83b4a67f1461d4925a1628b",
"assets/assets/images/icons/ic24_File%2520upload.png": "8762f2dc43f69811435ddf9e4b34a699",
"assets/assets/images/icons/ic16_Device%2520Alarm.png": "f38ffa7396b681842d5255d4beb02ed9",
"assets/assets/images/icons/ic24_Multimedia%2520photo.png": "25177cfdc08240af62d5b04f490e2db1",
"assets/assets/images/icons/ic16_Back.png": "7b89c41c1e658c71a60525ac848eb0f2",
"assets/assets/images/icons/ic24_Close.png": "8836ca094c17fa939ba338d93b2d6dda",
"assets/assets/images/icons/ic24_Notification_Black.png": "6bb4eaaad5ec8804d11acd50d629e6ad",
"assets/assets/images/icons/ic16_Arrow_Down.png": "22ec41ccbe63eace712f218285c52ee1",
"assets/assets/images/icons/ic16_MapLayer.png": "38f965b595242acb2d39af1bd10e1829",
"assets/assets/images/icons/ic16_ZoomOut.png": "71b9c3ced307508f2cd731034947ebf2",
"assets/assets/images/icons/ic24_File%2520download.png": "c551d6fc1e5033fc56e4f182813ff96a",
"assets/assets/images/icons/ic32_Location_FireStation.png": "dab000e7a9414803bf344e5f8287c40e",
"assets/assets/images/icons/ic16_Next.png": "9365cddf897c59670d00930bf9d319f9",
"assets/assets/images/icons/ic16_Phone.png": "a956a3dc03df0dfcc1333bbf957f6223",
"assets/assets/images/icons/ic16_Edit.png": "366b09db98b9a9e92d36c4f6a4dbc958",
"assets/assets/images/icons/ic24_FBA%2520Building%2520Check.png": "b4ed2f9485835363afb7bc1616fedebd",
"assets/assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/fonts/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/assets/fonts/Roboto-Italic.ttf": "465d1affcd03e9c6096f3313a47e0bf5",
"assets/assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
