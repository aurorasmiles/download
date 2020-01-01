var web_interface = {
	"label": "Web interface (Instead of using the public one)",
	"url": "https://github.com/boy0001/plotupload/archive/master.zip"
}
var plotupload_interface = {
	"label": "PlotUpload - web interface for searching plots",
	"url": "https://github.com/IntellectualSites/plotwebphp/archive/master.zip"
}
var fawe = {
    "label": "Download FastAsyncWorldEdit",
    "url": "https://intellectualsites.github.io/download/fawe.html",
}

var projects = {
	"Spigot 1.13 - 1.15.1": {
		"download": [
			{
				"label": "Download PlotSquared (Latest Release Build)",
				"url": "https://ci.athion.net/job/PlotSquared-Releases/lastSuccessfulBuild/artifact/target/",
				"regex": "PlotSquared-Bukkit",
				"ext": "jar"
            },
            {
				"label": "Download PlotSquared (Experimental Builds)",
				"url": "https://ci.athion.net/job/PlotSquared-Breaking/",
            },
            {
                "label": "Note: Requires FAWE or WorldEdit to work"
            },
			fawe,
		],
		"dependencies": [
            {
                "label": "HoloPlots (Holograms instead of signs)",
                "url": "https://ci.athion.net/job/HoloPlots/"
            },
            {
                "label": "Plot2Dynmap (Dynmap addon)",
                "url": "https://ci.athion.net/job/Plot2Dynmap/"
            },
            {
                "label": "PlotSquaredExpansion (PlaceholderAPI extension)",
                "url": "https://github.com/IntellectualSites/PlotSquared-Expansion"
            },
			web_interface,
            plotupload_interface
		],
		"config_path": "plugins"
    },
    "Spigot 1.8 - 1.12.2": {
        "download": [
            {
                "label": "Download PlotSquared (Latest Release Build)",
                "url": "http://ci.athion.net/view/%20%20PlotSquared%20/job/PlotSquared-Legacy/lastSuccessfulBuild/artifact/target/",
                "regex": "PlotSquared-Bukkit",
                "ext": "jar"
            }
        ],
        "dependencies": [
            fawe,
            {
                "label": "Plot2Dynmap (Dynmap addon)",
                "url": "http://www.spigotmc.org/resources/plot2dynmap.1292/"
            },
            {
                "label": "PlotRankup (Plot approval system)",
                "url": "http://www.spigotmc.org/resources/plotrankup.1571/"
            },
            {
                "label": "RedstoneClockPreventer2 (prevent clocks)",
                "url": "http://www.spigotmc.org/resources/redstoneclockpreventer-2.6678/"
            },
            {
                "label": "CommandBlock ( Restrict command blocks to plots)",
                "url": "https://www.spigotmc.org/resources/commandblock.12512/"
            },
            {
                "label": "PlotHider (Make plots invisible)",
                "url": "https://www.spigotmc.org/resources/plot-hider.20701/"
            },
            {
                "label": "HoloPlots (Holograms instead of signs)",
                "url": "https://www.spigotmc.org/resources/holoplots.4880/"
            },
            {
                "label": "[GEN] BiomeGenerator (Natural biomes within plots|not a world generator)",
                "url": "http://www.spigotmc.org/resources/biomegenerator.1663/"
            },
            {
                "label": "[GEN] PlotSquaredSG (Standalone generator|not a plot manager)",
                "url": "http://www.spigotmc.org/resources/plotsquared-sg.3736/"
            },
            {
                "label": "AdvPlots (Non square schematic generation)",
                "url": "http://www.spigotmc.org/resources/advplots-%CE%B2.1500/"
            },
            {
                "label": "BasicPlots (Basic generator with 1 plot per chunk)",
                "url": "http://www.spigotmc.org/resources/basicplots.6901/"
            },
            {
                "label": "PlotSquaredMG (Large custom terrain gen)",
                "url": "http://www.spigotmc.org/resources/plotsquaredmg.8025/"
            },
            {
                "label": "IslandPlots (Islands in ocean)",
                "url": "https://www.spigotmc.org/resources/islandplots.9421/"
            },
            web_interface,
            plotupload_interface,
        ],
        "config_path": "plugins"
    },
    "Nukkit": {
		"download": [
			{
				"label": "Download PlotSquared (Latest Release Build)",
				"url": "http://ci.athion.net/view/%20%20PlotSquared%20/job/PlotSquared-Legacy/lastSuccessfulBuild/artifact/target/",
				"regex": "PlotSquared-Nukkit",
				"ext": "jar"
            },
            fawe,
            {
                "label": "Download DBLib",
                "url": "https://github.com/fromgate/DbLib/releases/download/0.2.3/DbLib.jar"
            }
            
		],
		"dependencies": [
			web_interface,
            plotupload_interface
		],
		"config_path": "plugins"
    },
    "Sponge": {
		"download": [
			{
				"label": "Download PlotSquared (Latest Release Build)",
				"url": "http://ci.athion.net/view/%20%20PlotSquared%20/job/PlotSquared-Legacy/lastSuccessfulBuild/artifact/target/",
				"regex": "PlotSquared-Sponge",
				"ext": "jar"
            },
            fawe
		],
		"dependencies": [
			web_interface,
            plotupload_interface
		],
		"config_path": "mods"
	},
}

projectDefault = "Spigot 1.13 - 1.15.1";
