/**
 * AgoraIO/Tools (https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/nodejs/)
 * author    AgoraIO (https://github.com/AgoraIO)
 * link      https://github.com/AgoraIO/Tools/blob/master/DynamicKey/AgoraDynamicKey/nodejs/  AgoraIO/Tools source repository
 * copyright -
 * license   -
 * package   AgoraIO/Tools
 *
 */

const RtcTokenBuilder = require('./rtc/RtcTokenBuilder').RtcTokenBuilder;
const RtcRole = require('./rtc/RtcTokenBuilder').Role;

const appID = '2f5e5f34960d44f599a3b412a983e2ea';
const appCertificate = '5d492d2fa1cc4edc8a9b1eb055088efd';
const channelName = 'mewtea';
const uid = 1034614154;
const account = "1034614154";
const role = RtcRole.PUBLISHER;

const expirationTimeInSeconds = 3600

const currentTimestamp = Math.floor(Date.now() / 1000)

const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

// IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.

// Build token with uid
const tokenA = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, uid, role, privilegeExpiredTs);
console.log("Token With Integer Number Uid: " + tokenA);

// Build token with user account
const tokenB = RtcTokenBuilder.buildTokenWithAccount(appID, appCertificate, channelName, account, role, privilegeExpiredTs);