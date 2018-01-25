# healthcheck data service 
[![Build Status](https://travis-ci.org/thomsonreuters/cta-app-healthcheckdataservice.svg?branch=master)](https://travis-ci.org/thomsonreuters/cta-app-healthcheckdataservice)
[![Coverage Status](https://coveralls.io/repos/github/thomsonreuters/cta-app-healthcheckdataservice/badge.svg?branch=master)](https://coveralls.io/github/thomsonreuters/cta-app-healthcheckdataservice?branch=master)
[![codecov](https://codecov.io/gh/thomsonreuters/cta-app-healthcheckdataservice/branch/master/graph/badge.svg)](https://codecov.io/gh/thomsonreuters/cta-app-healthcheckdataservice)

Healthcheck Data Service for Compass Test Automation, One of an application in CTA-OSS Framework

## General Overview

### Overview

The **Healthcheck Data Service** is an application in **_Compass Test Automation_**. This application is checking the health of other CTA-data service such as cta-app-executiondataservice, cta-app-jobmanagerservice, cta-app-schedulerdataservice, etc. The service owners able to make sure that the health of their applications is verifiable in a straightforward, simple way.  It also receives an any status.

### Features

* Check the health of others data services 

* Provide an API to receive **a statuses** from data services 

## CTA-OSS Implementation

There are **several ways** to implement CTA-OSS Framework. We suggest that you _learn **how CTA-OSS Framework is structured**_ and _implement the way **that is appropriated to your work**_.

### Getting Started
#### Prerequisites
 1. Front End skills required include `HTML`, `CSS`, `JavaScript`, `JSON`. 
 2. Back End development using `Node.js`, `Express,` and `MongoDB`. It also important concept of source control using `Git`.

#### Installation & Startup

Make sure that you have **installed the package**. The easiest way to get started is to clone the repository:
```bash
git clone git@git.sami.int.thomsonreuters.com:compass/cta-app-healthcheckdataservice.git
```

```javascript
nmp install
```

To **start the service**

```javascript
node [application_directory]/lib/index.js
```

[back to top](#guidelines)

------

# Development Guide

## Contributing
You can follow [these steps](https://git.sami.int.thomsonreuters.com/compass/cta/blob/master/contributing.md) to contribute.

## More Information
Our service is composed of different components working together to schedule, run, collect tests results and more. You can find additional information for more understand in Execution Data Service.
We also cover in detail :
* The [Rest API](RESTAPI.md) is composed of multiple REST service to perform actions on CTA.
* A [DataContract](DATACONTRACT.md) is a formal agreement between a bricks.
* The [Document](https://git.sami.int.thomsonreuters.com/compass/cta-app-healthcheckdataservice/wikis/document) associated with a software project and the system being.
* A [Sequence Diagrams](https://git.sami.int.thomsonreuters.com/compass/cta-app-healthcheckdataservice/wikis/sequencediagram) is an interaction diagram that shows how objects operate with one another and in what order.

------

This code is running live at **CTA-OSS**. We also have [CTA Central Document](https://git.sami.int.thomsonreuters.com/compass/cta)

