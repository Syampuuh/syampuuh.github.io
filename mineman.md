
# Helpful tip: GitHub has an automatic Table of Contents in the hamburger menu, top left
![click this](https://i.imgur.com/3piNG6e.png)

# Installation

The Technic Launcher that I usually used to use for my modpacks apparently doesn't support Forge past 1.16 for some reason, so unfortunately our only options right now are direct downloads and installation. [You will need at least Forge 39.0.9 or greater to connect to the server and use most mods.](https://files.minecraftforge.net/net/minecraftforge/forge/index_1.18.1.html)

## MultiMC

Personally, for simplicity and customization, I recommend using [MultiMC](https://multimc.org/) over the vanilla launcher. MultiMC allows you to have multiple instances, ie. multiple installations, of Minecraft over different versions and mod setups, which is great for playing modpacks. To use it with my modpack, [download 1.18.1, install Forge on top of it,](https://github.com/MultiMC/Launcher/wiki/Getting-Started) and then extract the contents of the modpack archive from below into the `.minecraft` folder. As in the troubleshooting section, I recommend [increasing the allocated RAM for Minecraft to at least 8 gb.](https://github.com/MultiMC/Launcher/wiki/Increasing-Java's-memory-allocation)

## Download links

### Full version
This is the full featured modpack as I designed and intended for it to be, complete with preset keybinds and a shortcut to the server immediately available.

**[Direct download](https://www.dropbox.com/s/a0cchsoaa8nbhm7/shamcitizen%20-%20full.zip?dl=1)**

### Light version
If you're having trouble comfortably running the pack, try this instead. This strips out all of the extra client-side flavor mods, such as HUDs, voice chat, and inventory management mods, and leaves the bare minimum to connect to the server. If that seems to treat you well, you can try adding stuff back from the full pack to find what you like.

*\~coming soon probably\~*

### Server version
In ten thousand years I will be dead, and this Minecraft server won't be available anymore. Maybe. If that ever happens, here is the pack as it runs on the server. This is slightly different from the light version as it includes solely server-side tools like the chunk pre-generator and some mods absent in the light version are on the server to provide them with extra features that necessitate server-client communication, such as voice chat.

**[Direct download](https://www.dropbox.com/s/iy7zazzwis2a2mw/shamcitizen%20-%20SERVER.zip?dl=1)**

## Troubleshooting
### Minecraft takes forever to boot/load the server
Raise the amount of RAM being given to Minecraft,  I would recommend at *least* 8 gb. Pretty much anything above the default 2 should help. [Here is a guide for some common launchers](https://shockbyte.com/billing/knowledgebase/278/How-to-Allocate-More-Memory-to-your-Minecraft-Client.html), and [here is a guide for MultiMC.](https://github.com/MultiMC/Launcher/wiki/Increasing-Java's-memory-allocation)

### How the hell do I update to Java 17
I have no idea why this is so annoying to do. [Here is some random fucking Amazon installer that includes Java 17;](https://corretto.aws/downloads/latest/amazon-corretto-17-x64-windows-jdk.msi) you can verify it's installed after restarting your computer by opening a command prompt and entering in `java -version`; the output should read something like

    openjdk version "17" 2021-09-14 LTS
    OpenJDK Runtime Environment Corretto-17.0.0.35.1 (build 17+35-LTS)
    OpenJDK 64-Bit Server VM Corretto-17.0.0.35.1 (build 17+35-LTS, mixed mode, sharing)

If you've already got Java 17 and Minecraft is still saying otherwise, make sure that your launcher is pointed at the correct installation of Java. [Here's a guide to do that with MultiMC.](https://github.com/MultiMC/Launcher/wiki/Using-the-right-Java)

### Veinminer doesn't work
The initial release of the modpack had a binding conflict. This has since been fixed, but won't apply to an existing profile after you've already had the default options set. To resolve it manually, unbind the "Cheat 1 Stack" binding from JEI, or bind it to something other than your sneak key if you want to use it in single-player or something.

# About the server
The server is intended to be chiefly cooperative with a focus on exploration and expansion of industry and PVE capabilities. For now, PVP damage is enabled because friendly fire is funny and some faction warfare could be neat. Please, however, don't try to be a dick and Make A Thing out of it. I'm a lot more likely to just ban you upon being told you're a troublemaker than do anything preventative, because compromising the experience because of a bad egg is lame. So don't be lame.

![] (http://status.mclive.eu/shamcitizen.com/mc.shamcitizen.com/25565/banner.png)

# Introduction to some of our mods

## Interface

### Simple Voice Chat

![](https://i.imgur.com/tDmw2vz.png)

[CurseForge page](https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat)

Sometimes you don't want to tell every single person in the server where you just found something fancy. Or maybe you just want to serenade each other with your voices. Or maybe you just want to talk to someone who you don't share a Discord with? Whatever the case, this voice chat mod elegantly provides a way to do so with some cool proximity voice chat. It even works with [our sound physics mod](https://www.curseforge.com/minecraft/mc-mods/sound-physics-remastered), so you can get a neat echo and occlusion in caves!

### Just Enough Items, Not Enough Resources

![JEI Recipe GUI](https://i.imgur.com/YTuxxOL.png)

[JEI CurseForge page](https://www.curseforge.com/minecraft/mc-mods/jei)

[NER CurseForge page](https://www.curseforge.com/minecraft/mc-mods/just-enough-resources-jer)

These three essential mods provide you with immediate information and some basic documentation on every item in the game. In any inventory screen, JEI will provide a full list of every item on the right side of the screen and you can search through it by item name, mod name, etc. **Click** or press **R** to view how to make or otherwise obtain the item, or press **U** to view any recipes it's used in. This is essential to learning how to utilize most of our stuff, as the vanilla recipe book is just too tiny and clunky for how much we've got in here!

### Jade

![](https://i.imgur.com/LDZV3IB.png)

[CurseForge page](https://www.curseforge.com/minecraft/mc-mods/jade)

Jade is a WAILA fork: It provides immediate on-screen information about any block, and even entities and liquids, that you're looking at. This includes whether you have the correct tool to break a block, the amount of energy inside an IE battery, the breeding cooldown on farm animals, and much more.

### Inventory HUD+, AppleSkin, Xaero's Better PVP, Xaero's World Map

![](https://i.imgur.com/ML0dsIb.png)

[Inventory HUD+ CurseForge page](https://www.curseforge.com/minecraft/mc-mods/inventory-hud-forge)

[AppleSkin CurseForge page](https://www.curseforge.com/minecraft/mc-mods/appleskin)

[Xaero's Better PVP homepage](https://chocolateminecraft.com/betterpvp2.php)

[Xaero's World Map homepage](https://chocolateminecraft.com/worldmap.php)

All of these combined expand on the base HUD to provide a lot more information to you at a glance, such as the current durability of everything you have equipped, the value of food you've eaten, the duration of any active status effects, and even a full map of the world that you've explored and any waypoints you make. They're all completely customizable of course, so if you don't like the way I've set them up for you, go nuts and rejigger them however you like. Inventory HUD+ config can be opened with **O**, Better PVP with **[**, and the World Map with **]**.  
Small warning: Inventory HUD does not like the way I have configured our additional Curios slots, so it may just crash if you click on that customization menu. Oops.

### DynMap

![](https://media.forgecdn.net/attachments/8/340/dynmap3.png)

[CurseForge page](https://www.curseforge.com/minecraft/mc-mods/dynmapforge)

[GitHub Wiki](https://github.com/webbukkit/dynmap/wiki/)

While the in-game world map will only show the world as you've explored it, DynMap provides a full web-hosted map of EVERYTHING in the server that has been explored! You can even add markers to it and mark specific areas as your own: Check out the linked wiki for more details!  
The map can be found at: http://104.152.140.96:8123/

## World & Progression

### Immersive Engineering

![](https://pbs.twimg.com/media/EV-loeiWAAUWP3N.jpg)

[CurseForge page](https://www.curseforge.com/minecraft/mc-mods/immersive-engineering)

Immersive Engineering my beloved. IE introduces technology in a grandiose and powerful way, with multi-block machines capable of ore duplication, farming, and even automated turret systems. To get started, I recommend making an **Engineer's Manual** as soon as possible *(Any book + Lever)*, as it'll guide you throughout all of its mechanics and progression step-by-step.

### Alex's Mobs, Quark, Terralith, Repurposed Structures, Amplified Nether

![](https://i.imgur.com/cfgj9lL.png)
![](https://i.imgur.com/JXwqw7u.png)

[Alex's Mobs CurseForge page](https://www.curseforge.com/minecraft/mc-mods/alexs-mobs)

[Quark Homepage](https://quarkmod.net/)

[Terralith CurseForge page](https://www.curseforge.com/minecraft/mc-mods/terralith)

[Repurposed Structures CurseForge page](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures)

[Amplified Nether CurseForge page](https://www.curseforge.com/minecraft/mc-mods/amplified-nether)

These mods all add a greater variety of flavor to the world, introducing new animals, biomes, and structures throughout the world to use and explore. Of particular note is Alex's Mobs, which adds a heck of a zoo of new animals and monsters, and provides you with an immediate guide to each one's properties and how it can be useful to you. From a gun made from a mosquito to armor that lets you roll around like Sonic the Hedgehog, it's definitely worth a look. Further, Quark includes quite a few options beyond just the world, offering convenient new features like multiple hotbars and orientation locks for building; take a look at its configuration and key binding options to learn more!

### Dungeon Crawl

![](https://i.imgur.com/LBtABE0.png)

[CurseForge page](https://www.curseforge.com/minecraft/mc-mods/dungeon-crawl)

Rarely throughout the world, you might find some spooky towers: These are entrances to dungeons. No, not vanilla Minecraft's dinky little one room """dungeons""", real dungeons. These dungeons are randomly assembled multi-floor structures that descend through the earth, full of monsters to fight and loot to plunder. Think like a super version of the vanilla Strongholds.

### Loot Bags

[CurseForge page](https://www.curseforge.com/minecraft/mc-mods/loot-bag-mod)

All that monster killing's gotta be for something! Even the most innocuous mob has a change to drop a Loot Bag, which will grant you a small assortment of *any* 10 items in the game. Yes, ***anything*** (except for control blocks and the like). It's a 1 in 100 chance from rarer hostile mobs, but when you get one it can end up being one hell of a boon.

### Majrusz's Progressive Difficulty

![](https://puu.sh/IyUSC/4823eb1906.png)

[CurseForge page](https://www.curseforge.com/minecraft/mc-mods/majruszs-progressive-difficulty)

[GitHub Wiki](https://github.com/Majrusz/MajruszsProgressiveDifficultyMod/wiki)

Someone's gonna notice all that monster killing. Shamelessly dervitive of Terraria, Progressive Difficulty adds new mechanics like increased enemy groups and new raids as you make progression through the game. Entering the Nether will raise the world's difficulty to "Expert", while slaying the Ender Dragon will raise the world's difficulty to "Master". Of course, increased difficulty means increased rewards, with each bump in difficulty providing global boosts to loot and experience drops. Helpfully, these also power up the charms featured in Majrusz's Accessories!  
I recommend checking the linked GitHub wiki page for the full lists of changes to each difficulty mode, as it introduces a few other new "base" mechanics such as bleeding and changes to some enemy spawning behavior right out of the gate.

## Enchanting

### Matrix Enchanting (Quark)

![](https://quarkmod.net/img/features/oddities/matrix-enchanting.jpg)

[Quark Features page](https://quarkmod.net/#features) (Click "Oddities", then scroll down to "Matrix Enchanting")

Vanilla enchanting is completely replaced. Instead of completely randomly assigned enchants, you spend experience levels and charges of lapis to generate possible enchantments which are assigned to Tetrimino-like blocks, which you can arrange into a 5x5 grid on the item. Similar to vanilla enchanting, surrounding an enchantment table with bookshelves allows you generate more enchantments, and in turn you can combine the same enchantments to upgrade their level.

### Enchanting Infuser

![](https://i.imgur.com/tZhYkWr.png)

[CurseForge page](https://www.curseforge.com/minecraft/mc-mods/enchanting-infuser-forge)

Going even further beyond matrix enchanting, the Infuser enchantment tables allow you to precisely pick the enchantments you want from all available enchantments, but with a significant cost mark-up, as well as requiring a total of 30 bookshelves (vs the standard 15) to fully utilize every available enchantment. There are two tiers, with the highest tier being made with Netherite and decreasing the total cost of enchantments from the first tier (though it remains higher than standard enchantments would).

### Tool Leveling

![](https://i.imgur.com/ZG7qGcF.png)

[CurseForge page](https://www.curseforge.com/minecraft/mc-mods/tool-leveling-plus)

Still need *more* enchanting control? Tool Leveling adds an additional work table that can be used to level enchantments up even further than their vanilla limitations at the cost of rare and valuable items. The value of any given item can be seen its tooltip, and is dependent on its overall rarity and usefulness.

## Combat & Equipment

### Epic Knights: Shields, Armor and Weapons

![](https://i.imgur.com/KuaAwTR.png)

[CurseForge page](https://www.curseforge.com/minecraft/mc-mods/epic-knights-armor-and-weapons)

Epic Knights adds a wide variety of new weapon types and accompanying armors themed after, you guessed it, medieval knights. Most of the armor utilizes steel, necessitating some progression in Immersive Engineering, but it offers high level and specialized protection. The weapons add some more mechanical depth to your options for combat, with varying capabilities like extended reach and blocking with new drawbacks to consider like equipment weight and two-handedness.

### Parry This!

[CurseForge page](https://www.curseforge.com/minecraft/mc-mods/parrying)

Comboing nicely with Epic Knights, Parry This adds... parrying. Swing any weapon at the same time an enemy attacks, player or not, to deflect their attack and negate the damage! With the "Deflection" enchantment, you can even parry projectiles. It also adds a dedicated dual wielding system: equipping a one-handed weapon in each hand grants an overall attack speed bonus as you attack with each weapon alternatingly, avoiding the usual caveats of dual wielding with Minecraft's regular off-handing system and damage cooldowns. The mod also adds a damage bonus for back-attacks, providing an actual reason to use stealth when possible for a massive 3x damage multiplier. Additionally, all shields gain access to a new shield bashing ability, which can stun a group of targets momentarily and can make for a great combo with a slower weapon to maintain your damage output. Finally, there is a universal dodging system that allows you perform a short hop at any time on the ground in any direction (default binding is **ALT**).

### Curios, Artifacts, Nameless Trinkets, Majrusz's Accessories

![](https://i.imgur.com/OT2aoh8.png)

[Curios CurseForge page](https://www.curseforge.com/minecraft/mc-mods/curios)

[Artifacts CurseForge page](https://www.curseforge.com/minecraft/mc-mods/artifacts)

[Nameless Trinkets CurseForge page](https://www.curseforge.com/minecraft/mc-mods/nameless-trinkets)

[Majrusz's Accessories CurseForge page](https://www.curseforge.com/minecraft/mc-mods/majruszs-accessories)

Successors to the old Baubles mods, these mods each add a collection of special pieces of equipment that you can use to gain various minor (and not so minor) buffs, through either recycling the items or looting them throughout the world. These can allow for more specialized combat builds or more capable exploration, so keeping a good collection handy can provide a lot of flexibility when exploring.

### Chalk

![](https://i.imgur.com/p5UUeNF.png)

[CurseForge page](https://www.curseforge.com/minecraft/mc-mods/chalk)

A handy little tool to allow you to mark up caves with arrows pointing in any direction, with colored and glowing variants available. Never get lost in these gigantic caves again!

### Player Revive

[![](https://i.imgur.com/EbGJO9x.png)](https://youtu.be/vE3eal-TyMY)

[CurseForge page](https://www.curseforge.com/minecraft/mc-mods/playerrevive)

So you've got all these fancy new mechanics and equipment, but then you stumble into a room with 3 archers and a piglin. Dead! Or not? If a friend can reach you within **60 seconds**, it's possible for them to revive you! You'll be beat up and hungry, but it beats dying entirely.

### Corpse

![](https://i.imgur.com/tDPoSPD.png)

[CurseForge page](https://www.curseforge.com/minecraft/mc-mods/corpse)

Okay, the friend also died. When your revive timer runs out (or you choose to give up), instead of farting out a loose pile of items to get dropped and lost, you will leave behind your corpse carrying all of your items which can be easily reacquired; they'll even zip back into the same slots you had them in at the time death if possible. **The corpse has no time limit and cannot be looted by anyone but yourself.** Small mercy, you just gotta be able to reach it!

## Keybinds you should know

*Obviously, these can all be rebound however you want in the options menus! Further, there's a lot of binds that are not set by default, being mostly shortcuts and other miscellaneous functions; if you think you've got the buttons to spare, go for it*
|Input|Action|
|--|--|
| Alt | Dodge (when pressed with a movement button |
| Right Click + Left Click | Shield bash while blocking with a shield or blade slap with a two handed weapon
| R | Hold to quickly eat the first food item in your hot bar
| X | Go prone to crawl through one block spaces
| Alt + Right Click | Pick up an animal or tile entity block in your hands to move it
| B | Open backpack if one is available |
| V | Open voice chat configuration menu |
| Caps Lock | Push to talk
| N | Ping menu
| Middle Click | Auto-sort an open inventory under the cursor
| T | Toggle visibility of trash slot in an inventory (it may not work cleanly with every interface)
| Delete | Send item under the cursor into the trashs slot
| Y | Create waypoint
| U | View waypoints
| M | View world map
| Z | Hold to enlarge minimap
| Shift (Sneak) | Hold while breaking a block to engage vein mining: mine up to 6 connected blocks of the same type at once (increased by enchantments)
| R | View crafting recipes of the item under the cursor if possible
| U | View crafting uses of the item under the cursor if possible

# Changelog
## 1.0.1
*Dec 27th 2021*
- Fixed binding conflict between JEI and Veinminer; this won't be applied retroactively and only fixes it for new default options going forward
