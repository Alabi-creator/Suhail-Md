const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349066072589";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_38_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExLFxuICAgICAgICAzMixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxODEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNixcbiAgICAgICAgMTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNyxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MixcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg4LFxuICAgICAgICA1OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDMxLFxuICAgICAgICA5NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzAsXG4gICAgICAgIDM5LFxuICAgICAgICA0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5LFxuICAgICAgICA4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkwLFxuICAgICAgICAyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNixcbiAgICAgICAgMzAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgODUsXG4gICAgICAgIDkzLFxuICAgICAgICA0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2NixcbiAgICAgICAgNDYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgODksXG4gICAgICAgIDUwLFxuICAgICAgICA3MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTczLFxuICAgICAgICA3OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkhRbUpFS3E0VzBIenpOdFp6WFE1RkdoR0JCbUhOY1hXeWdTbm43MXVsYlE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkhTS3dQd0xIUVNtR19ZX0FYMzd0cXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGZjZDdjM2ItODBmZi00MzMwLWFiZWMtMTI3NDZjMjI4NDM1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDQxLFxuICAgICAgMTAsXG4gICAgICAxMDMsXG4gICAgICAxOTUsXG4gICAgICAzNSxcbiAgICAgIDE2MCxcbiAgICAgIDExNSxcbiAgICAgIDE1OSxcbiAgICAgIDExOCxcbiAgICAgIDE1NyxcbiAgICAgIDksXG4gICAgICAxMDMsXG4gICAgICAxNjgsXG4gICAgICA0NyxcbiAgICAgIDEwNixcbiAgICAgIDM2LFxuICAgICAgNjYsXG4gICAgICAyNDIsXG4gICAgICAxNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE3LFxuICAgICAgMTcxLFxuICAgICAgMjgsXG4gICAgICAyMTEsXG4gICAgICAxOTMsXG4gICAgICAyNDQsXG4gICAgICAyMDUsXG4gICAgICAxNzksXG4gICAgICAxMjgsXG4gICAgICAzMyxcbiAgICAgIDUwLFxuICAgICAgMTQ5LFxuICAgICAgMTM1LFxuICAgICAgMjA0LFxuICAgICAgMSxcbiAgICAgIDIzNSxcbiAgICAgIDEzMSxcbiAgICAgIDEwNyxcbiAgICAgIDE2NyxcbiAgICAgIDE3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzQTQ2NFk1RlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2NjA3MjU4OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTE2NzY5Mzc4ODM2NjA6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPUHVuZGdIRU5EamxMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlY3RHVoN3Vaa1B1Ym1wTEhqMFg4dkhOR1hLR0hFRllYOEJFT3EwaHR2VU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNTZBMGljQXpvbkdwaGQzZDVoK3BtNWZ6c25xdHJScEhhWVE3R0ZSblVxNmE3bzEvYnRTaitHWlYrREtCUlNSMG5WT25CSmVESWdmelh0SzJTQUVjRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYThGOG53Vkt5dE1mUHNGa0paWEU3Mm5DWjhqajQ5MDRrSVpuQ0xoS0hVbTI4STBjWTNHdGdqVGRwRXVldTJsYkZsZVlRQkpXSVp3b05wbVE5dTdyaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA2NjA3MjU4OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzkwNzkyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBMTlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUExOLmpzb24iOiAie1wia2V5RGF0YVwiOlwiS2VHa1o2RXJsYjUrN3RhamVyMGdZTFN4ZnlwVXBGSW1FOEVLQXhSSTExUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDY0MDg2ODgzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTc5MDc5MjkwMTJcIn0iCn0"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
