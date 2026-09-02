// Use LANG environment variable to choose locale
user_pref("intl.locale.requested", "");

// Use system-provided dictionaries
user_pref("spellchecker.dictionary_path", "/usr/share/hunspell");

// Disable default browser checking.
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("skipDefaultBrowserCheckOnFirstRun", false);

// Don't disable extensions in the application directory
user_pref("extensions.autoDisableScopes", 11);

// Enable hardware acceleration
user_pref("media.hardware-video-decoding.force-enabled", true);
user_pref("media.webrtc.hw.h264.enabled", true);
user_pref("media.gpu-process-decoder", true);

// Performance & Graphics Tweaks
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.capacity", 1048576);
user_pref("gfx.canvas.accelerated.cache-items", 32768);
user_pref("gfx.canvas.accelerated.cache-size", 4096);
user_pref("gfx.content.skia-font-cache-size", 80);
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.precache-shaders", true);
user_pref("gfx.webrender.program-binary-disk", true);
user_pref("layers.gpu-process.enabled", true); // Use dedicated GPU process
// Variable Refresh Rate (VRR) / Frame Rate Capping
user_pref("layout.frame_rate", 141);

// JavaScript & Process Tweaks
user_pref("javascript.options.baselinejit.threshold", 50); // Lower JIT threshold
user_pref("javascript.options.ion.threshold", 500); // Lower Ion threshold

// Memory & Cache Tweaks (Non-Disk)
user_pref("image.cache.size", 10485760); // Increase decoded image cache size (10MB)
user_pref("image.mem.decode_bytes_at_a_time", 65536); // Increase image decode chunk size
user_pref("image.mem.shared.unmap.min_expiration_ms", 120000);
user_pref("media.cache_readahead_limit", 7200); // Increase media readahead
user_pref("media.cache_resume_threshold", 3600); // Increase media resume threshold
user_pref("media.memory_cache_max_size", 1048576); // Increase media memory cache (1GB)
user_pref("media.memory_caches_combined_limit_kb", 3145728); // Increase combined media caches limit (3GB)
user_pref("network.buffer.cache.size", 65535); // Network buffer size
user_pref("network.ssl_tokens_cache_capacity", 32768); // Increase SSL token cache

// Remove Mozilla stuff
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.contentanalysis.default_result", 0);
user_pref("browser.contentanalysis.enabled", false);
user_pref("browser.contentblocking.report.hide_vpn_banner", true);
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.mobile-android.url", "");
user_pref("browser.contentblocking.report.mobile-ios.url", "");
user_pref("browser.contentblocking.report.monitor.enabled", false);
user_pref("browser.contentblocking.report.proxy.enabled", false);
user_pref("browser.contentblocking.report.proxy_extension.url", "");
user_pref("browser.contentblocking.report.show_mobile_app", false);
user_pref("browser.contentblocking.report.vpn-android.url", "");
user_pref("browser.contentblocking.report.vpn-ios.url", "");
user_pref("browser.contentblocking.report.vpn-promo.url", "");
user_pref("browser.contentblocking.report.vpn.url", "");
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.dataFeatureRecommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.ipProtection.enabled", false);
user_pref("browser.ipProtection.guardian.endpoint", "");
user_pref("browser.ipProtection.variant", "");
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.page", false);
user_pref("browser.ml.enable", false);
user_pref("browser.ml.linkPreview.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.aboutpreferences", false);
user_pref("browser.newtabpage.activity-stream.feeds.adsfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
user_pref("browser.newtabpage.activity-stream.feeds.places", false);
user_pref("browser.newtabpage.activity-stream.feeds.recommendationprovider", false);
user_pref("browser.newtabpage.activity-stream.feeds.system.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.system.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);
user_pref("browser.newtabpage.activity-stream.system.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", 0);
user_pref("browser.newtabpage.activity-stream.telemetry.ut.event", false);
user_pref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.enabled", false);
user_pref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.spocs.enabled", false);
user_pref("browser.newtabpage.activity-stream.unifiedAds.adsFeed.tiles.enabled", false);
user_pref("browser.newtabpage.activity-stream.unifiedAds.endpoint", "");
user_pref("browser.newtabpage.activity-stream.unifiedAds.spocs.enabled", false);
user_pref("browser.newtabpage.activity-stream.unifiedAds.tiles.enabled", false);
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.places.interactions.enabled", false);
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("browser.promo.cookiebanners.enabled", false);
user_pref("browser.promo.focus.enabled", false);
user_pref("browser.promo.pin.enabled", false);
user_pref("browser.protections_panel.infoMessage.seen", true);
user_pref("browser.send_to_device_locales", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.tabs.groups.smart.userEnabled", false);
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.suggest.addons", false);
user_pref("browser.urlbar.suggest.quicksuggest.fakespot", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.topsites", false);
user_pref("browser.urlbar.suggest.trending", false);
user_pref("browser.vpn_promo.enabled", false);
user_pref("captivedetect.canonicalURL", "");
user_pref("cookiebanners.ui.desktop.showCallout", false);
user_pref("devtools.debugger.remote-enabled", false);
user_pref("dom.private-attribution.submission.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.security.unexpected_system_load_telemetry_enabled", false);
user_pref("extensions.abuseReport.enabled", false);
user_pref("extensions.blocklist.enabled", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("media.gmp-gmpopenh264.autoupdate", false);
user_pref("signon.firefoxRelay.feature", "disabled");

// Reduces the CLRite base refresh period in the lack of a persistent
// background push service
user_pref("security.OCSP.enabled", 0);
user_pref("security.pki.crlite_mode", 2);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("services.settings.poll_interval", 300);

// Remove telemetry
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.monitor.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
user_pref("browser.newtabpage.activity-stream.trendingSearch.blockedAds", "");
user_pref("browser.newtabpage.activity-stream.trendingSearch.enabled", false);
user_pref("browser.newtabpage.activity-stream.trendingSearch.variant", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.search.serpEventTelemetryCategorization.enabled", false);
user_pref("browser.search.serpEventTelemetryCategorization.regionEnabled", false);
user_pref("browser.search.update", false);
user_pref("browser.shopping.experience2023.enabled", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.urlbar.addons.featureGate", false);
user_pref("browser.urlbar.fakespot.featureGate", false);
user_pref("browser.urlbar.mdn.featureGate", false);
user_pref("browser.urlbar.pocket.featureGate", false);
user_pref("browser.urlbar.weather.featureGate", false);
user_pref("browser.urlbar.yelp.featureGate", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.usage.uploadEnabled", false);
user_pref("extensions.addonAbuseReport.url", "");
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("network.traffic_analyzer.enabled", false);
user_pref("network.trr.confirmation_telemetry_enabled", false);
user_pref("security.certerrors.recordEventTelemetry", false);
user_pref("toolkit.contentRelevancy.enabled", false);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.cachedProfileGroupID", "");
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

// Remove Google safebrowsing
user_pref("browser.safebrowsing.allowOverride", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.debug", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.remote.url", "");
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.id", "");
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.google.advisoryName", "");
user_pref("browser.safebrowsing.provider.google.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.lists", "");
user_pref("browser.safebrowsing.provider.google.pver", 0);
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryName", "");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.lists", "");
user_pref("browser.safebrowsing.provider.google4.pver", 0);
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.lastupdatetime", 0);
user_pref("browser.safebrowsing.provider.mozilla.lists", "");
user_pref("browser.safebrowsing.provider.mozilla.lists.base", "");
user_pref("browser.safebrowsing.provider.mozilla.lists.content", "");
user_pref("browser.safebrowsing.provider.mozilla.nextupdatetime", 0);
user_pref("browser.safebrowsing.provider.mozilla.pver", 0);
user_pref("browser.safebrowsing.provider.mozilla.reportURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");

// Performance tweaks
user_pref("browser.tabs.unloadOnLowMemory", true); // Unload unused tabs
user_pref("content.notify.interval", 100000); // page reflow timer, lower redrawn rendering timer, increases responsiveness but increase total load time
user_pref("network.dnsCacheExpiration", 3600); // Time DNS entries are cached in seconds.
user_pref("network.http.max-connections", 1800); //https://kb.mozillazine.org/Network.http.max-connections
user_pref("network.http.max-persistent-connections-per-server", 10); //https://kb.mozillazine.org/Network.http.max-persistent-connections-per-server
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5); //Number of connections that we can open beyond the standard parallelism limit defined by max-persistent-connections-per-server/-proxy to handle urgent-start marked requests
user_pref("network.http.pacing.requests.enabled", false); //Disable pacing requests

// Privacy hardening
user_pref("browser.contentblocking.category", "strict"); // https://blog.mozilla.org/security/2021/02/23/total-cookie-protection/
user_pref("browser.download.start_downloads_in_tmp_dir", true); //start downloads in temp
user_pref("browser.formfill.enable", false);
user_pref("dom.security.https_only_mode", true); // only allow https in all windows, including private browsing
user_pref("media.autoplay.default", 5);
user_pref("network.cookie.cookieBehavior.optInPartitioning", true);
user_pref("network.cookie.cookieBehavior.optInPartitioning.pbmode", true);
user_pref("network.predictor.enable-prefetch", false); // Disable speculative website loading
user_pref("network.predictor.enabled", false); // Disable speculative website loading
user_pref("network.prefetch-next", false); // https://developer.mozilla.org/en-US/docs/Glossary/Prefetch
user_pref("privacy.query_stripping.strip_list", "__hsfp __hssc __hstc __s _hsenc _openstat dclid fbclid gbraid gclid hsCtaTracking igshid mc_eid ml_subscriber ml_subscriber_hash msclkid oft_c oft_ck oft_d oft_id oft_ids oft_k oft_lk oft_sk oly_anon_id oly_enc_id rb_clickid s_cid twclid vero_conv vero_id wbraid wickedid yclid"); // https://groups.google.com/a/mozilla.org/g/dev-platform/c/1vOSas0ptVQ?pli=1
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com"); // allow embedded social content
user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com"); // allow embedded social content

// Desktop integration
user_pref("widget.use-xdg-desktop-portal.file-picker", 1);

// UI/Behavior Tweaks
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true); // Use physics-based smooth scrolling
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 200);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 250);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2.0"); // Ensure float format if needed
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "1.0"); // Ensure float format if needed
user_pref("general.smoothScroll.stopDecelerationWeighting", "1.0"); // Ensure float format if needed
user_pref("mousewheel.default.delta_multiplier_y", 300); // Adjust mouse wheel scroll speed

// Feature Enablement
user_pref("layout.css.grid-template-masonry-value.enabled", true); // Enable CSS Masonry layout
