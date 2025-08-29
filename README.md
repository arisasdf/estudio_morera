# README

See `Cheatsheet.md` for my custom setup tips and other notes.

## Mise, Ruby, and Rails

From https://gorails.com/setup/windows/10

Copying essential commands over in case the link ever disappears from existence.

### Mise
```bash
sudo apt update
sudo apt install build-essential rustc libssl-dev libyaml-dev zlib1g-dev libgmp-dev
curl https://mise.run | sh
# follow on screen instructions
mise use --global ruby@3
ruby --version
gem update --system
mise use --global node@22.13.0
node -v
```

### Git
```bash
git config --global color.ui true
git config --global user.name "YOUR NAME"
git config --global user.email "YOUR@EMAIL.com"
ssh-keygen -t ed25519 -C "YOUR@EMAIL.com"
# use this to setup on github
cat ~/.ssh/id_ed25519.pub
ssh -T git@github.com
```

### Rails 
```bash
gem install rails -v 8.0.1
```

### Postgres
```bash
sudo apt install postgresql libpq-dev
sudo service postgresql start
sudo -u postgres createuser chris -s
sudo -u postgres psql
postgres=# \\password chris
```

## Node

TODO: check if necessary after mise

```bash
sudo apt install nodejs
node -v
npm -v
```

## Setup

```bash
npm install
bundle install
bundle exec rails db:create
bundle exec rails db:migrate
```

## Run

On separate terminals:

```bash
./bin/shakapacker-dev-server
bundle exec rails server
```
