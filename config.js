const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Joelstar1@gmail.com" // no need
global.location="Lagos,Nigeria." // no need


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/jamesxtreme/JORDAN-JOELSTAR";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaCamn3BKfi29OjdbG2P";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaCamn3BKfi29OjdbG2P" ; 
global.THUMB_IMAGE = process.env.IMAGE || "https://telegra.ph/file/5a06979ab4afb8ab7dccb.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "2349054039891" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "221760263631,221760263631";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "221760263631";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '2'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/f81015230c96d1f53ab60.mp4" // set images here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2349054039891";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349054039891";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://miles-qr.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1A1NThGTzVrYnNLMXJtM2NZTFJGYllrTkdjSVRrWjUvMnoxU211allVdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTRUeno4VUZ0UW5iZ05KMmlxMklHdk12T3J3cXRwam9uR1dhN2txVTNnRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSXNSUG9OMWFhZ3FIT0NxUnphR0dYZGpKRnJCY2F2WWYwZE1pMnVNVW1nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0MXJLWkw5QTBOa1VpS0tZd2w5ZmcrN2JXOHA4YlNxNmlRbWM5djBTbG1zPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhMMGNKNkxMTVlybHViUDZWbUJzWkxjM1hPYUpSVGhWRkFzRkljblJIRkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJmeDRGeGJXcDlBUjJ4QndGS1RIamoxNnNYaVBUL1hjd3p1cFh5N1NwRm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU5RcmVEUklGVHBQVFR3UzJYcFRQbkVTVG5UWDhQd0lCNHQxMVNid2RXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWJwNE9rZEUzYXBBR1Z1ZHVYd0Q2ODhZcnk3NzhsUXJRZTJIL015U0UxYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBUYVdoU0R0M3NoclU2S0NiYmcwQ3lTLzg2am5hNFZ4Wkp3d3BEUk9LUStGOTR6amF4WFVKdncwaDRwY1RDOGl0T0NWV1hvbi81RU95N1Rjcnk2aWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE5LCJhZHZTZWNyZXRLZXkiOiJjUW5KQlRLN0huNkowYU91M1dTanVYRUxIVDVzV1MxTDVyTUY1aktDTVg0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIyMTc2MDI2MzYzMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEMzJENEMwODI5MjMzQTdDODU1QUMxOUM2M0VCN0JCRSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE5NjQxNzg0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqc1ZKMkV2QVJLNjBaQk42Vmw0aWh3IiwicGhvbmVJZCI6IjE2ZmVlNzI5LTE3MjMtNDA1OC1hZTY4LTI2ZDFiNTU4ZmQxYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzVUI5TG9PV2J4b1NxaW1mWDUzR2dncW1KWFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3dHMXhjL3NNTUdMN2FuOE9UaGl4ZmF3eXh3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRCWUg4RUFDIiwibWUiOnsiaWQiOiIyMjE3NjAyNjM2MzE6OTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi44Kk44OQ44Op44OS44OeLvCdkIHwnZCi8J2QnPCdkKjwnZCm8J2QmvCdkKvwnZCuIPCdkJLwnZCh8J2QqPCdkKDwnZCu8J2Qp/CdkJrEqyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTE9FdjlzSEVLak4vck1HR0FzZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZ2ZkVDBRbndaMU04aThWU3J5UHNZeEI0TFlYK1dONlBiYWhQdFNsSjZFVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSjZjWlVJZ1k3WW5pelFacWNraEo5WXN3ZzU1czlYU1AxQlE1QlBVWXVpOEEyNk8wVlk5UDUvbGllL25TcXJBajBoam9aVE9rdkk1SXdEajFOeU9hQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6Ikl5SmpIcEswdUd3RFBKT28rM25WVzZzR1BCV1E5aG1XU2swY0dCQmhySU1hdUpvTlZSSXd5M2R1cWVQTDlMRHF5RDhjcjR1QUd6Yks1aElrNDFVVWdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjIxNzYwMjYzNjMxOjkwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllIM1U5RUo4R2RUUEl2RlVxOGo3R01RZUMyRi9samVqMjJvVDdVcFNlaEYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk2NDE3ODEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTTBGIn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "2", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "🅹🄾🆁🅳🄰🄽-🅹🄾🅴🄻🅂🅃🄰🆁" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Bicom Lab",
  packname: process.env.PACK_NAME || "All",
  botname : process.env.BOT_NAME  || "🅼︎🅸🄻🅴🅂",
  ownername:process.env.OWNER_NAME|| "Bicomaru Shogunaī",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com,https://whatsapp.com/channel,https://t.me,https://slnkz.com,https://azcoiner.com,https://mobile.over.network,https://shibaai.club/signup,https://link.kelp.finance,https://emerson,https://tr.ee/Child-Support-Fund-Portal",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "MILES"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk_fc684773c50c51d94ce06651d6274392a83108cb44449628";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
