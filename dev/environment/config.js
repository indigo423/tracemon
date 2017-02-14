
define([], function(){

    /**
     * Configuration file
     */

    return {
        widgetPrefix: "lm",
        dataAPIs: {
            results: "http://localhost/unified_api.php?id=0000",
            metadata: "https://atlas.ripe.net/api/v2/measurements/0000/routequake/meta/",
            dataApiAsAnnotation: "http://localhost/as_lookup.php",
            dataApiReverseDns: "https://stat.ripe.net/data/reverse-dns-ip/data.json",
            dataApiGeolocation: "https://stat.ripe.net/data/geoloc/data.json",
            dataApiAsnNeighbours: "https://stat.ripe.net/data/asn-neighbours/data.json",
            peeringDb: {
                lans: "http://localhost/peering_db.php?type=ixlan",
                ixps: "http://localhost/peering_db.php?type=ix",
                prefixes: "http://localhost/peering_db.php?type=ixpfx"
            }
        },
        autoStart: true,
        defaultViewName: "as",
        defaultAggregationIPv4: false, //
        defaultAggregationIPv6: false, //
        streamingUrl: "https://atlas-stream.ripe.net:443",
        viewsEnabled: ["host", "as"],
        reproductionSpeed: 5, // Default speed of the reproduction between 1 and maxReproductionSpeed
        maxReproductionSpeed: 10, // Maximum speed of the reproduction
        reproductionSpeedUnit: 200, // milliseconds - Reduce or increase this value to speed up or slow down the reproduction speed keeping the scale intact
        ixpHostCheck: true,
        maxNumberHops: 8,
        realTimeUpdate: true,
        eventGroupingAntiFlood: 800,
        templatesLocation: "http://localhost:63342/viz-atlas-tracemon/dev/view/html/",
        defaultLabelLevel: "ip",
        ajaxTimeout: 50000,
        reloadSourcesDiff: 3, // reload the dataset id the sources set changes of at least N probes
        filterRepeatedTraceroutes: true, // Filter traceroutes reporting the same results consecutively
        defaultLoadedResultSetWindow: 3600 * 2, // Second
        defaultNumberOfDisplayedSources: 8,

        startWithLastStatus: true,

        lateReportedResults: 200, // seconds of validity for a late reported result


        transitionsTimes:{
            pathChange: 600,
            pathRemoval: 600,
            nodeRemoval: 1000
        },

        graph: {
            margins: { top: 20, bottom: 20, left: 150, right: 150 },
            removeCycle: true,
            groupCycles: true,
            combineNullHosts: true,
            allowRotatedLabels: false,
            combineSameAsNullNode: false,
            labelOrientationPreference: ["r", "t", "l", "b"],
            pathInterpolation: "basis",
            nodeRadius: 7,
            nodeSelectedRadius: 10,

            normalOpacity: 1,
            verticalNodeDistance: 40,

            asColors: ["#ff0000", "#ffcc00", "#00ffaa", "#005299", "#f780ff", "#590000", "#594700", "#bfffea", "#bfe1ff",
                "#590053", "#99574d", "#66644d", "#005947", "#001433", "#b3008f", "#992900", "#8f9900", "#00ffee", "#001f73",
                "#ff0088", "#ffa280", "#003033", "#0022ff", "#804062", "#ffd0bf", "#ccff00", "#53a0a6", "#8091ff",
                "#99003d", "#ff6600", "#293300", "#00ccff", "#7c82a6", "#664d57", "#332b26", "#a1e673", "#00aaff", "#6c29a6",
                "#ff0044", "#593000", "#44ff00", "#003c59", "#e1bfff", "#330d17", "#ffa640", "#00590c", "#23698c", "#220033",
                "#ffbfd0", "#d9b56c", "#53a674", "#4d5e66", "#cc00ff", "#ff8091"] //Generated by the CMC(I:c) colour differencing algorithm to procedurally generate a set of visually-distinguishable colours within a certain tolerance.
        }

    };
});
