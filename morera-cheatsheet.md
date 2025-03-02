# Lucía's Cheat Sheet

This is a bunch of stuff I wanted to save somewhere -- instructions, notes, commands -- so that I may reference in the future if needed, and maybe it'll help someone someday too. 🖤

## WSL

### Install

In cmd or PowerShell:

```bash
wsl --install
wsl -l -o # to see all available distros
wsl --install -d <distro name>
wsl
```

Optionally set up VS Code:

Install the VS Code Remote WSL extension
https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl

```bash
wsl
> code
```

### Cheatsheet
From https://learn.microsoft.com/en-us/windows/wsl/basic-commands

```bash
# list distros and status
wsl.exe -l -v
# terminate everything
wsl.exe --shutdown
# terminate a distro
wsl.exe -t DistroName
```

## Oh My Zsh
My fav theme is `avit`

```bash
sudo apt install zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## howtographql tutorial

See https://www.howtographql.com/graphql-ruby/1-getting-started/

- skipped all the skip flags and used postgres for rails (`rails new estudiomorera -d postgresql`)
- `bundle add graphql` instead of adding manually to Gemfile

## GraphQL cheatsheet

I'm an experienced Rails fullstack dev, but I'm entirely new to GraphQL, so this is my learning notepad. We all start somewhere!

---

Scaffolding a `model` and then a `graphql:object` will autogenerate the GraphQL type fields.

```bash
bx rails g model <Name> [ ...fields ]
bx rails g graphql:object <Name>
```

Other scaffolds:

```bash
bx rails g mutation[_create || _update || _delete] <Name>
```

Relay style nested input Mutation:

```
mutation {
  workCreate(
    input: {
      workInput: {
        title: "La Maja Dolorosa #2",
        subtitle: "Ay, majo de mi vida",
        composer: "E Granados",
        notes: "Parte de la colección '12 Tonadillas en estilo antiguo' de Enrique Granados."
      }
    }
  ) {
    work {
      id
      title
    }
  }
}
```