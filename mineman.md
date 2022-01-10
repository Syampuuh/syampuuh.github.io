# Helpful tip: GitHub has an automatic Table of Contents in the hamburger menu, top left
![click this](https://i.imgur.com/3piNG6e.png)

# Installation

The Technic Launcher that I usually used to use for my modpacks apparently doesn't support Forge past 1.16 for some reason, so unfortunately our only options right now are direct downloads and installation. [You will need at least Forge 39.0.9 or greater to connect to the server and use most mods.](https://files.minecraftforge.net/net/minecraftforge/forge/index_1.18.1.html)

## Updating

If you're updating an existing installation, make sure to only extract the "mods" folder and not the "configs" folders, as you can end up overwriting any existing changes you may have made to mods like the HUD and so on.

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

![](http://status.mclive.eu/mc.shamcitizen.com/mc.shamcitizen.com/25565/banner.png) 

The server is intended to be chiefly cooperative with a focus on exploration and expansion of industry and PVE capabilities. For now, PVP damage is enabled because friendly fire is funny and some faction warfare could be neat. Please, however, don't try to be a dick and Make A Thing out of it. I'm a lot more likely to just ban you upon being told you're a troublemaker than do anything preventative, because compromising the experience because of a bad egg is lame. So don't be lame.

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

*Reminder: If you're updating an existing installation, make sure to only extract the "mods" folder and not the "configs" folders, as you can end up overwriting any existing changes you may have made to mods like the HUD and so on.*

## 1.5.0

*Jan 2nd 2022*

 - Updated [Fast Leaf Decay](https://www.curseforge.com/minecraft/mc-mods/fast-leaf-decay/files/3590415), [FindMe](https://www.curseforge.com/minecraft/mc-mods/findme/files/3590895), [Inventory Profiles](https://www.curseforge.com/minecraft/mc-mods/inventory-profiles-next/files/3587647), [Nameless Trinkets](https://www.curseforge.com/minecraft/mc-mods/nameless-trinkets/files/3590331), [Polymorph](https://www.curseforge.com/minecraft/mc-mods/polymorph/files/3587694), [Sophisticated Backpacks](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/3587268), and [Terralith](https://www.curseforge.com/minecraft/mc-mods/terralith/files/3584980)
 - Added [Armor Hotswap](https://www.curseforge.com/minecraft/mc-mods/armor-hotswap), [Inventory Hotswap](https://www.curseforge.com/minecraft/mc-mods/inventory-hotswap), [Balanced Flight](https://www.curseforge.com/minecraft/mc-mods/balanced-flight), [Corail Recycler](https://www.curseforge.com/minecraft/mc-mods/corail-recycler), [FarSight](https://www.curseforge.com/minecraft/mc-mods/farsight), [Server Tab Info](https://www.curseforge.com/minecraft/mc-mods/server-tab-info), and [Pretty Pipes](https://www.curseforge.com/minecraft/mc-mods/pretty-pipes)
	 - Inventory Hotswap lets you **switch between individual slots in your hotbar with the slots above it, or swap your entire hotbar at once.** I think this plays nicely with our ability to lock inventory slots, so you can have a designated row of weapons or tools to save some hotbar space. And yes, Quark does add something similar, but it doesn't allow individual slot swapping and has some weird UI issues; I like this implementation a lot more. Note that, once again, there is a likely default binding overlap here with dodging, as both default to Left ALT. **Check your binds and rebind as you please!** I've found that Right ALT is a nice binding for the swapper, but I also have huge hands and reaching that far while pressing 1-3 might not be so easy otherwise.
	 - Balanced Flight **adds rings that provide limited creative and elytra flight** within a radius set by building a specific "anchor" block. It also, of course, adds a super ring that allows unlimited flight; I am on the fence about this one mostly for performance concerns, but once more let's see how it shakes out.
	 - The Corail Recycler **adds a new "recycler" block that can be used to recover half of the items used to craft something,** even if you didn't craft it yourself of course. I've tried to add every mod we have to its recipe book, but I'm only human so let me know if anything seems to missing or anomalous. **I've also added recipes for all the rusted crap that zombies drop sometimes, so they can be used to requisition some extra steel;** finally, those drops are useful!
	 - Pretty Pipes provide **item transportation and automation pipes.** I always forget how annoyingly limited IE's conveyor belts are until the moment I want to do anything with more than one destination, so here is the solution.
 - Speaking of performance concerns, the server now has Performant installed. It cost $15 on Patreon to get a damn pre-release version for 1.18, but fuck it was worth it as **server-wide slowdown seems to have been completely resolved.** Knock on wood. Note that you, personally, may still experience some "moved too fast" rubberbanding, but unfortunately I don't think there's anything I can do about that. At the very least, when that happens the entire server's TPS won't plummet.
 - Reconfigured Epic Knights Armory and Progressive Difficulty
	 - I **removed a bunch more overlapping steel recipes** from Epic Knights, so we should end up with less redundant nuggets and no more free plates.
	 - The **falling status effects have been disabled** so that they don't trigger every 3 seconds when trying to grapple or fly around.

## 1.4.0

*Dec 31st 2021*

- Updated [Dramatic Doors](https://www.curseforge.com/minecraft/mc-mods/dramatic-doors/files/3586643), [Immersive Engineering](https://www.curseforge.com/minecraft/mc-mods/immersive-engineering/files/3587149), [Storage Drawers](https://www.curseforge.com/minecraft/mc-mods/storage-drawers/files/3587221), and [Supplementaries](https://www.curseforge.com/minecraft/mc-mods/supplementaries)
	- [Sophisticated Backpacks had a new version release today,](https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/files/3587268) but it currently conflicts with Polymorph so I cannot add it just yet
- Replaced [Actually Useful Stonecutter](https://www.curseforge.com/minecraft/mc-mods/actually-useful-stonecutter) with its alternate version that doesn't have a bunch of cheat recipes. Oops!
- Added [Advanced Hook Launchers](https://www.curseforge.com/minecraft/mc-mods/advanced-hook-launchers), [FindMe](https://www.curseforge.com/minecraft/mc-mods/findme) and its dependency [Architectury](https://www.curseforge.com/minecraft/mc-mods/architectury-forge), [Iron Scaffolding](https://www.curseforge.com/minecraft/mc-mods/ironscaffolding), [Refined Storage](https://www.curseforge.com/minecraft/mc-mods/refined-storage), [Pierce Arrow](https://www.curseforge.com/minecraft/mc-mods/pierce-arrow)
	- Hook Launchers add some much needed mobility to our pack (aside from the wacky bullshit some Curio combinations allow, but treasure them while they last 🙂), adding **a variety of grappling hooks for zipping and swinging around**.
	- For safer, more grounded navigation, Iron Scaffolding is another flavor of "exactly what it says it is": **It adds a new variety of iron-flavored scaffolding that is functionally similar to the vanilla scaffolding's unique movement and placement properties,** but made of iron. **It's completely fireproof,** so it can be safely used to get around the Nether. It can even be "lavalogged", building straight through lava, and the dropped item cannot be burned so you can break it and recover it with a magnet safely.
	- Refined Storage, finally! I caved. Given the absolutely massive piles of shit we can end up with rather quickly through our hyper-Fortune pickaxes and industrial efforts, ultimately just some drawers eventually doesn't cut it anymore. **Refined Storage provides fancy pants "digital" storage that can condense all your crap into one easy to sort through terminal.** And some other stuff.
	- For those of us without a buncha "disks" of items, Find Me is a handy utility mod that can **locate a given item in containers around you,** for when you misplace strings for the 20th time. Just hover over any item in your inventory or JEI, and press the keybind. Note that that keybind defaults to Y, which is already default-bound to the creating a waypoint. I've rebound it to `/~ in the default options, but I don't think that will apply to existing installations, so **you may want to double check your keybinds to resolve any conflicts**.
- Re-added [Entity Culling](https://www.curseforge.com/minecraft/mc-mods/entityculling)
	- **The performance gain for some folks is significant enough to outweigh the occasional minor visual bugs.** If it bugs you enough and your system can take it, feel free to toss it! Or heck, toss Optifine if you don't need it, since it's the other half of the equation.

## 1.3.0
*Dec 30th 2021*

 - Updated [Equipment Compare](https://www.curseforge.com/minecraft/mc-mods/equipment-compare/files/3586250), [Iceberg](https://www.curseforge.com/minecraft/mc-mods/iceberg/files/3586154), [Iron Furnaces](https://www.curseforge.com/minecraft/mc-mods/iron-furnaces/files/3585973), and [Repurposed Structures](https://www.curseforge.com/minecraft/mc-mods/repurposed-structures/files/3586301)
 - Added [Blaze Gear](https://www.curseforge.com/minecraft/mc-mods/blaze-gear/screenshots),  [Faster Minecarts When Rails are Placed on Copper Blocks](https://www.curseforge.com/minecraft/mc-mods/faster-minecarts-when-rails-are-placed-on-copper), and [Visuality](https://www.curseforge.com/minecraft/mc-mods/visuality-forge)
	 - Blaze Gear is an old favorite of mine that adds exactly what it says it does: **New materials and tools can be made using materials from Blazes,** offering some more neat built-in enchantments on equipment. This will matter more when our enchantment progression isn't a complete joke, I promise.
	 - Faster Minecarts When Rails are Placed on Copper Blocks, in addition to taking the award for longest named mod in the pack, also adds exactly what it says it does: **Place minecart rails on top of copper blocks for a big speed boost.** Copper finally has a real use past making a shitload of wire!
 - Removed Entity Culling
	 - Turns out an incompatibility between this mod and Optifine was what was responsible for the weird flickering through walls we've seen occasionally. From my own observation this mod wasn't doing much, but let me know if you think the loss of it has significantly impacted performance on your system. Of course, [feel free to grab it again yourself.](https://www.curseforge.com/minecraft/mc-mods/entityculling)
 - Various Progressive Difficulty balance changes on the server configuration files:
	 - **Loot bags now drop from fewer (and less farmable) mobs**: Only Creepers, Elder Guardians, Endermen, and Evokers. I might expand this list to include a few of our modded mobs later, I just need to determine which would be appropriate.
	 - **Loot bags should now actually exclude creative items.**
	 - **Creepers now only have a 10% chance of spawning "knowing" how to detonate through walls**, similar to the vanilla mechanic of zombies having a chance of knowing how to break down doors.
	 - **Decreased max explosion size from 125% to 110%.**
	 - **Explosions only have a 50% chance of igniting the area** instead of being guaranteed now.
- As a general note, the developer of the Physics Mod has confirmed fixes for the bugs from yesterday, though a build with the fixes hasn't shown up yet; it'll return Soon™

## 1.2.0

*Dec 29th 2021*

 - Updated [Adorn](https://www.curseforge.com/minecraft/mc-mods/adorn-for-forge/files/3584467), [Artifacts](https://www.curseforge.com/minecraft/mc-mods/artifacts/files/3584325), [AmbientSounds](https://www.curseforge.com/minecraft/mc-mods/ambientsounds/files/3584353), [Balm](https://www.curseforge.com/minecraft/mc-mods/balm), [Crafting Tweaks](https://www.curseforge.com/minecraft/mc-mods/crafting-tweaks/files/3584842), [DungeonCrawl](https://www.curseforge.com/minecraft/mc-mods/dungeon-crawl/files/3583964), [Iron Chests](https://www.curseforge.com/minecraft/mc-mods/iron-chests/files/3583838), [Iron Furances](https://www.curseforge.com/minecraft/mc-mods/iron-furnaces/files/3583823), [PuzzlesLib](https://www.curseforge.com/minecraft/mc-mods/puzzles-lib/files/3583543), [Supplementaries](https://www.curseforge.com/minecraft/mc-mods/supplementaries/files/3583912), [TrashSlot](https://www.curseforge.com/minecraft/mc-mods/trashslot/files/3584917), and [V-Tweaks](https://www.curseforge.com/minecraft/mc-mods/v-tweaks/files/3582332)
	 - The Iron Chests update **fixes Crystal Chests crashing their user**, so they're safe to use again.
 - Reconfigured Enchantment Infuser again and Tool Leveling
	 - **Enchantments are now 2× base costs and Tool Leveling costs are 6× base costs**; it now takes a bit more than a stack of diamonds to increase the level of Sharpness, for an example. Additionally, **all enchantments have been capped to Level 10**. Hopefully this is a little less stupid so we can keep the mod around, but otherwise it may be removed in the next iteration of the modpack, we'll see.
 - Added [CraftingCraft](https://www.curseforge.com/minecraft/mc-mods/craftingcraft/files/3584875), [Item Borders](https://www.curseforge.com/minecraft/mc-mods/item-borders), [MK's Bowyery](https://www.curseforge.com/minecraft/mc-mods/mkbowyery), and [LazyDFU](https://www.curseforge.com/minecraft/mc-mods/lazy-dfu-forge/files/3544496)
	 - CraftingCraft gives us something I've been hankering for this entire time: **A portable crafting grid.** Combine a crafting table with a stick to get it, and you can craft without having to put a block down. You don't even have to equip it, there's an optional keybind you can use as long as it's in your inventory.
	 - MK's Bowyery (I don't think that is a word) adds **new bows** made from common Minecraft metals, with variable durability and some built in enchants. It also adds **new arrows and some cheesy arrow recipes**; I'm a little unsure about leaving in the latter part, but let's see how it shakes out. Frankly, easy to make arrows would be the least of our balancing issues right now.
	 - LazyDFU will **slightly improve start up load time.** It knocked about 10 seconds off my own load time... out of 90, but that's still an improvement, and as I understand you should see increased gains on lower power systems.
 - Temporarily, hopefully, removed Physics Mod, and removed, permanently, Moving Elevators and Waystones
	 - Currently, the mod **causes a client crash when breaking any Storage Drawer**; I have opened [an issue report](https://github.com/haubna/PhysicsMod/issues/237) for a way to blacklist modded blocks, but for now the mod's gotta go since it's just a neat aesthetic flavor mod and non-essential in comparison to Storage Drawers
	 - Moving Elevators causes horrible graphical issues with Optifine, and since no one was using it anyway, off it goes
	 - Waystones was left in sort of by accident ages ago; I originally wanted folks to have to use the Nether and minecarts as a primary means of long range travel to try and encourage industrialization. We *would* have a mod that [adds faster minecart tracks on copper](https://www.curseforge.com/minecraft/mc-mods/faster-minecarts-when-rails-are-placed-on-copper), but that is apparently broken right now.
 - Corrected modpack format so that **it works with MultiMC's modpack importer again**; I forgot that feature exists.

## 1.1.0

*Dec 28th 2021*

 - Updated [Artifacts](https://www.curseforge.com/minecraft/mc-mods/artifacts/files/3583056), [Physics Mod](https://www.curseforge.com/minecraft/mc-mods/physics-mod/files/3583001), [Better PVP](https://chocolateminecraft.com/update.php?mod_id=1) and [World Map](https://www.curseforge.com/minecraft/mc-mods/xaeros-world-map/files/3582993), [Enchantment Descriptions](https://www.curseforge.com/minecraft/mc-mods/enchantment-descriptions/files/3582626), [Optifine](https://optifine.net/changelog?f=preview_OptiFine_1.18.1_HD_U_H5_pre4.jar), and [Supplementaries](https://www.curseforge.com/minecraft/mc-mods/supplementaries/files/3582396)
	- The update to Artifacts **fixes the hilarious Everlasting Beef drop rate**; feel free to hold onto the existing ones, removing them would be more trouble than it'd be worth and the idea of an *actual* beefconomy trade is really funny to me
	- The Optifine update should hopefully **fix the occasional weird reverse-culling issues** we've seen with some tile entities
 - Reconfigured Enchantment Infuser
	 - **Enchantment costs are now ~1.5× more expensive.**
 - Added [Flan](https://www.curseforge.com/minecraft/mc-mods/flan-forge), [Chat Heads](https://www.curseforge.com/minecraft/mc-mods/chat-heads), and [Visual Workbench](https://www.curseforge.com/minecraft/mc-mods/visual-workbench)
	 - **Flan finally introduces chunk claiming.** The short version: Use a golden hoe to mark a zone to claim, up to 4 chunks worth of blocks can be claimed. You can configure permissions and groups with your friends using `/flan menu` when inside your zone. The long version: [Read their documentation.](https://github.com/Flemmli97/Flan/wiki/)
 - This is not a modpack update, but **the server has been upgraded**, with 2 more cores and 8 more GB of RAM; we're now running on an 8 core system with 32 GB of RAM, which should hopefully minimize the hiccups in TPS we see at higher player counts.
	 - While I was at it, I also slightly reconfigured DynMap to hopefully be a little more responsive, but it still doesn't seem great. I'm probably going to have to look for help on this.


## 1.0.1

*Dec 27th 2021*

 - Fixed binding conflict between JEI and Veinminer; this won't be applied retroactively and only fixes it for new default options going forward

# Modpack 2.0

## Additions

### Dungeons and other structures

 - Awesome Dungeons
 - Castle in the Sky
 - Dungeons Arise
 - Sky Villages

Each of these mods adds more unique structures and dungeons throughout the world, full of loot to find and enemies to smack. I've tried to tune their spawn rates so that you should be able to see something different somewhat often, but not too many repeats.

 - End Remastered

End Remastered completely alters the path of progression to reach the End, changing it from simply farming pearls and then bee lining to the portal, and instead requiring a more interesting journey of finding different types of eyes from different drops, dungeons, and mini-bosses. Naturally, I recommend taking a look at the short guides on the mod page for more in-depth details.

 - Biomes 'o Plenty

Biomes 'o Plenty is an old faithful biome mod that adds a very large variety of new biomes, including some more fantastical ones. It offers a matching variety of woods and plants to accompany them that can be handy for decoration.

 - Blue Skies

Blue Skies introduces a new separate adventure alongside the rest of the familiar Minecraft world, with two new dimensions to explore and their own monsters and bosses to meet.

### Tools and mechanics

 - Chunkloaders

Chunkloaders provide incremental utility blocks that will let you keep your farms and machines running when you're away from them, as long as you're still on the server.

 - Create, Create Additions, Create Deco

Create is a tech mod with a focus on physical mechanics, utilizing physical force through gears and shafts to provide automation and enhanced harvesting mechanics. Also take particular note of Create Additions, which adds machines capable of generating RF; you'll need these in order to charge electronics like Scanners and Refined Storage.

 - Ever Potion

Ever Potion is a very fancy mod that grants endless access to nearly any potion effect on a cooldown, even splash potions and tipped arrows. The keys to unlock each of the 3 usable slots are extremely rare and lost on death, but having even one can provide a massive boost in survivability with the right potion effects on hand.

 - Falling Tree

Plain and simple, Falling Tree is finally a real tree felling mod that will let you destroy any tree from the bottom with one broken block, even by hand!

 - FTB Chunks, FTB Teams

FTB Chunks and Teams combine to provide a toolset for claiming chunks and forming teams with other players to cooperate within those chunks. Claimed chunks can have protection from both other players and hostile mobs, so it's a must when you've settled down. Each player can claim up to 8 chunks.

 - Responsive Shields

Responsive shields provides and extra combat improvement: The hidden start up delay on a shield's protection has been reduced to just 1 tick (0.05 sec, about the length of the raise animation) instead of the long ass 5 ticks (0.25 sec, more than enough time to get shot when you thought you were safe). This makes shields significantly more useful in tight fights against groups when you can't reasonably swing at a target while trying to ward off another with projectiles.

 - Skiing

Skiing adds skiing. It also adds sledding and snowboarding, for funsies. With 1.18's terrain, this mod can add some quick options for getting downhill from a mountain base.

 - Tetra

i have not actually touched this much yet but it was recommended to me lol, i think it's like a tinkers' replacement without smelting

 - Wall-jump

I've been waiting for this one. Wall-jump, true to its name, adds some much needed base mobility to the game by letting you grab onto any surface and hop up past it. It can be utilized to climb up higher ledges or jump between parallel walls to climb out of a pit. Trust me, when you get used to it, you won't be able to live without it.
 
### Other utilities

 - Better Compatibility Checker

Better Compat Checker will provide a clear indicator of when there's an update for the modpack available in the server list, so you don't have to just keep an eye out for my announcements of them on Discord or keep track of the version in the server MOTD.
 
 - CraftTweaker

CraftTweaker will finally let me alter recipes as needed without having to dive right into a mod's .JAR and yanking a .JSON out, necessitating server and pack updates. Coulda used this like, a month ago.

 - Memory Usage Screen

## Changes

 - Loot Bags

Loot Bags will now operate on a strict whitelist, of mostly resource items and occasional rarer tools and crafting materials, such as Ever Potion slots or rare components for Create crafting. No more bottomless drawers, for sure this time!

 - Physics Mod

Physics will now default to entirely disabled for blocks, but remain active for items and mobs. While there've already been plenty of complaints about performance issues when veinmining or knocking down trees, Create adds a weird new headache to the mix: Whenever a contraption becomes active, those blocks "break" and spew out a buncha particles. This looks really stupid and can hypothetically tank performance with more complex on-off automated systems, but I like the visual flavor of the item physics and mobs breaking apart enough to still keep that around. Special mention to how the item physics are even active in Create's "ponder" tutorials, seeing them flip about and off-screen is pretty good.

## Removals

 - Awesome Flooring

Bloated up crafting recipes with a lotta decorative crap that nobody ever used.

 - Air Hop

Redundant, as Wall-jump adds its own double jump enchantments.

 - Bowyery

Redundant, as both Apotheosis and Tetra add a wider variety of bow and arrow customization.

 - Dungeon Crawl

Weirdly taxing on client-side performance for some reason. This has actually been an issue since all the way hell back when I first started using it on 1.12.2, but I figured that time for the developer and general improvements to my own computer and the servers I use should remedy it. Nope, still runs kinda ass. As such, it's getting tossed, but there's plenty else to fill its shoes.

 - Enchanting Infuser

The combination of being able to directly pick out enchantments *and* overlevel them is way too powerful, and it made it quickly unnecessary to engage with matrix enchanting at all. Tool Leveling is now in a pretty place, being very expensive and not unlimited, so logically Infusing can go.

 - Flan

Redundant, as FTB Chunks provides far more elegant chunk claiming and management tools.

 - Immersive Engineering

Replaced by Create and friends. While not 100% comparable in terms of scope/capabilities, a tech mod is a tech mod, and having both would pretty much just let you cheat or outright ignore the other.

 - My Server is Compatible

Redundant, as Better Compatibility Checker enhances the server compat check to actually be functional and useful rather than just removing it.

 - Multi-Piston

Redundant, as Create can pretty well do this in a way fancier fashion.

 - Nameless Trinkets

After some evaluation, I've decided that ultimately almost all of the content in Nameless Trinkets falls somewhere on a scale of "redundant" to "too powerful", or sometimes somewhere in a 4D position of both ends of the scale. As such, particularly with Artifacts now on 1.18, I've decided it's best to just get rid of it rather than try to force it to fit in.

 - Pretty Pipes

Obviously, redundant because of Create. While Create's item transportation is superficially similar to IE's conveyors, additional tools like mechanical arms and depots massively extend the capabilities of the systems for automated tasks beyond just "move item from A to B".

 - Torch Slab Mod

Has some weird breaking issues with lanterns. While not the biggest deal, it's also not outstandingly useful, and I'd rather just remove a broken mod than keep one around even if it's not broken often.

## Wishlist

However much I might wish it, there's still a lot of mods that aren't available on 1.18, or worse yet, are trapped on Fabric.

 - I'm really hoping Grappling Hooks gets brought up to date sooner or later. Advanced Hook Launchers isn't bad, but it's a bit jank and rather basic. Grappling Hooks has some absurdly fluid movement, and now with all its new wacky Titanfall derivative enchantments it is just way too cool for me *not* to want it.
 - Some flavor of "skills" mod would be wonderful to provide further use for XP; way the hell back in the day, [Improvable Skills](https://www.curseforge.com/minecraft/mc-mods/improvable-skills) was the shit, but I haven't seen another good take on it for Forge since then. That developer is still working pretty much entirely on 1.12 content, so someone else is going to have to take on the job hopefully.
 - BetterEnd and BetterNether are wonderful mods that are now Fabric exclusive. While the Nether is not so much in need of help these days, the End is still pretty barren and boring, even with Quark and Alex's Mobs sprucing up the flora and fauna a bit. *Something* to improve it would be great.
 - Relatedly, Draconic Evolution is pretty much the best mod to give the End really purpose past, well, being the End. So far it's been getting worked on for 1.16, so I am going to hope against hope that 1.18 is on the horizon some time past that.
 - Guns are fucking cool. Modern Warfare, while really overly ambitious and pretty jank, hasn't really been touched for the amount of content and equipment depth it offered. That said, TechGuns was a much more "Minecrafty" take on a gun mod that had some actual very solid progression and a lot going on beyond just being "another gun mod". Anyway, I want something that goes "bang" and doesn't look like a high schooler's game dev class project. The TechGuns devs' Discord is pretty much abandoned though, so this is probably another one where I'm just kinda gonna be hoping that some other great king appears to fill their shoes.
 - Grimoire of Gaia was also pretty cool. Don't look at me like that, it's not *just* because it added cute monster girls. I downloaded it for that at first, but it actually added quite a bit of variety to the world that I kinda miss. Also I like cute monster girls. Having been camping out in their Discord server for a while, it seems that the developer has been slowly chipping away at updating it, so I am crossing my fingers they can bring it back some time soon.
