const client = new StreamerbotClient({
  host: "127.0.0.1",
  port: 8080,
  endpoint: "/",
  password: "",
  onConnect: onConnect
});

client.on("General.Custom", (payload) => {
  console.log("Custom Websocket Event.", payload);
  let event = payload.data;
  if(event.info == "StreamLabels") {
    console.log("StreamLabels Event.", event);
    if(event.champion == "null") {
      $("#stream-label-koth").html("No-one has risen to Champion.");
    } else {
      $("#stream-label-koth").html("<div class='label'>Champion:</div> " + event.champion);
    }
    if(event.bitsLeader !== "null") {
      $("#stream-label-bit-leader").html("<div class='label'>Bits Leader:</div> " + event.bitsLeader + " (" + event.bitsLeaderAmt + ")");
    }
    if(event.subLeader !== "null") {
      $("#stream-label-sub-leader").html("<div class='label'>Gift Sub Leader:</div>" + event.subLeader + " ("+ event.subLeaderAmt +")");
    }
    if(event.bitsRecent !== "null") {
      $("#stream-label-bit-recent").html("<div class='label'>Latest Bits:</div> " + event.bitsRecent + " (" + event.bitsRecentAmt + ")");
    }
    if(event.subRecent !== "null") {
      $("#stream-label-sub-recent").html("<div class='label'>Latest Sub:</div> " + event.subRecent );
    }
  }
  if(event.info == "Shoutout") {
    if(event.isFeatured) {
      featuredShoutout(event.user);
    } else if(event.isFriend) {
      friendShoutout(event.user);
    } else {
      basicShoutout(event.user);
    }
  }
});

async function onConnect(instance) {
  console.log("StreamerBot Connected.", instance);
  let streamLabels = await client.doAction("2eb5f452-b9a4-429a-a638-40dce0801f74");
}

function basicShoutout(user) {
  // We don't currently use this.
}
function friendShoutout(user) {
}
function featuredShoutout(user) {
}
