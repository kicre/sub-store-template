let compatible
let config = JSON.parse($files[0])

config.inbounds = config.inbounds?.filter(i => i.type !== "tun") || []

if (Array.isArray(config.inbounds)) {
  config.inbounds = config.inbounds.filter(i => i.type !== "tun")
} else {
  config.inbounds = []
}

$content = JSON.stringify(config, null, 2)
