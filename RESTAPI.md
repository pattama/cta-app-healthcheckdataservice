Rest API
========

# Summary

**healthcheck**

* [Update healthcheck](#update-healthcheck)
* [Read healthcheck](#read-healthcheck)

# Update healthcheck

**Request**

```
POST /healthcheck
{
    "name": "myapp",
    "child": "some app service",
    "status": "red",
    "reason": "some reason"    
}
```

**Response**

```
201
{
  "result": "ok"
}
```

# Read healthcheck

**Request**

```
GET /healthcheck
```

**Response**

```
200
{
  "status": "red",
  "statuses": {
    "myapp": {
      "status": "red",
      "current": {
        "services": {
          "some app service": {
            "date": "2016-12-02T14:48:33.010Z",
            "status": "red",
            "reason": "some reason"
          }
        }
      },
      "previous": {      
      }
    }
  }
}
```