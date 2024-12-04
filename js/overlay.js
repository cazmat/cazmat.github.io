const client = new StreamerbotClient({
  host: "127.0.0.1",
  port: 8080,
  endpoint: "/",
  password: "",
  onConnect: onConnect
});

client.on("General.Custom", (payload) => {
  console.log("Custom Websocket Event.", payload);
});

async function onConnect(instance) {
  console.log("StreamerBot Connected.", payload);
  let streamLabels = await client.doAction("2eb5f452-b9a4-429a-a638-40dce0801f74");
}
