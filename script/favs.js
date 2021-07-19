var projects = {
	"Spigot 1.13.2 - 1.17.1": {
		"download": [
			{
				"label": "Download FAVS",
				"url": "https://dev.bukkit.org/projects/favs"
            }
		],
		"config_path": "plugins"
	},
	"Spigot 1.7.10 - 1.12.2": {
		"download": [
			{
				"label": "Download FAVS",
				"url": "http://ci.athion.net/job/FastAsyncWorldEdit/lastSuccessfulBuild/artifact/target/",
				"regex": "FastAsyncVoxelSniper-favs",
				"ext": "jar"
            },
            {
				"label": "Note: FAVS requires FAWE to work"
			},
			{
				"label": "Download FAWE",
				"url": "https://intellectualsites.github.io/download/fawe.html",
			}
		],
		"config_path": "plugins"
	},
}

projectDefault = "Spigot 1.13.2 - 1.17.1";
