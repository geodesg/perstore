var ErrorConstructor = require("./util/extend-error").ErrorConstructor;
var AccessError = exports.AccessError = ErrorConstructor("AccessError");

var MethodNotAllowedError = exports.MethodNotAllowedError = ErrorConstructor("MethodNotAllowedError", AccessError);

var DatabaseError = exports.DatabaseError = ErrorConstructor("DatabaseError");

var NotFoundError = exports.NotFoundError = ErrorConstructor("NotFoundError", DatabaseError);
NotFoundError.prototype.code = 2;

var PreconditionFailed = exports.PreconditionFailed = ErrorConstructor("PreconditionFailed", DatabaseError);
PreconditionFailed.prototype.code = 3;

var otherErrors = ["Meh", // following the standard HTTP status codes at https://github.com/joho/7XX-rfc
"Unpossible",
"KnownUnknowns",
"UnknownUnknowns",
"Tricky",
"ThisLineShouldBeUnreachable",
"ItWorksOnMyMachine",
"ItsAFeatureNotABug",
"Compiling",
"AKittenDies",
"IThoughtIKnewRegularExpressions",
"YUNOWriteIntegrationTests",
"IDontAlwaysTestMyCodeButWhenIDoIDoItInProduction",
"MissedBallmerPeak",
"ConfoundedByPonies",
"ReservedForChuckNorris",
"Hungover",
"Stoned",
"OverCaffeinated",
"UnderCaffeinated",
"JSConf",
"Sober",
"Drunk",
"CachedForTooLong",
"NotCachedLongEnough",
"NotCachedAtAll",
"WhyWasThisCached?",
"ErrorOnTheException",
"Coincidence",
"OffByOneError",
"OffByTooManyToCountError",
"SomebodyElsesProblemOperations",
"SomebodyElsesProblemQA",
"SomebodyElsesProblemItWasACustomerRequestHonestly",
"SomebodyElsesProblemManagementObviously",
"TPSCoverSheetNotAttached"];
otherErrors.forEach(function(name){
	exports[name + "Error"] = ErrorConstructor(name + "Error");
});