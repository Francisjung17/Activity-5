/**
 * Wrap everything in an IIFE
 */
(function() {
    /**
     * Package data and constructor objects
     */

    //Package data array (simulated data source, such as a JSON or database recordset)
    var data = [
    {
        name: 'Emmet',
        description: 'Emmet is the number one code snippet tool.',
        author: 'Emmetio',
        downloads: 1662209,
        stars: 2456,
        price: 10.50,
        selector: 'p1'
    },
    {
        name: 'Version Lens',
        description: 'Shows the latest version for each package using code lens.',
        author: 'pflannery',
        downloads: 608523,
        stars: 53,
        price: 'free',
        selector: 'p2'
    },
    {
        name: 'CodeStream: GiHub, GitLab, BitBucket PRs and Code Review',
        description: 'GitHub pull requests and code reviews in your IDE. Eliminate context-switching between tools. Also integrates with GitLab, Bitbucket, Slack, Teams, Jira, Trello, and more.',
        author: 'CodeStream',
        downloads: 109070,
        stars: 57,
        price: 'free',
        selector: 'p3'
    }
    ];

    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.stars = data.stars;
        this.price = data.price;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };
        this.getFormattedStars = function() {
            return this.stars.toLocaleString();
        };
    }

    /*******************
     * Utility Functions
     *******************/

    //Return today's date, formatted
    var getTodaysDate = function(){
        var today= new Date();
        return today.toDateString();
    };

    //Return DOM Element by ID
    var getEl= function(id){
        return document.getElementById(id);
    };

    //Writes the package object's data to the appropriate DOM
    //elements utilizing the package selector property.
    var writePackageInfo = function(package){
        //Get reference to DOM elements
        var selector = package.selector,
        nameEl= getEl(selector+ '-name'),
        descEl= getEl(selector+ '-description'),
        authEl= getEl(selector+ '-author'),
        downloadEl= getEl(selector+ '-downloads'),
        starsEl = getEl(selector+ '-stars');

        //Write package to the DOM elements
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = getFormattedDownloads();
        starsEl.textContent = getFormattedStars();
    };

    // Write date
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    //Write package data one-by-one
    var emmet = new Package(data[0]);
    writePackageInfo(emmet);

    var verLens = new Package(data[1]);
    writePackageInfo(verLens);

    var codeStream = new Package(data[2]);
    writePackageInfo(codeStream);

}());