function catFact() {
    fetch('https://catfact.ninja/fact')
  .then(response => response.json())
  .then(data => console.log(data));
}

const token = 'OTQxMTU3NzU5ODIxNDE0NDAw.YgR3dw.6MVkLFXKtIJvZnYzljvpEoPRbIM';
fetch('https://discord.com/api/users/@me', {
  headers: {
    Authorization: `Bot ${token}`
  }
}).then(response => response.json()).then(data => console.log(data));