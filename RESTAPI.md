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

GET /healthcheck
```
{
  status: 'red'
}
```

GET /healthcheck?mode=full
```
{
  status: 'red',
  statuses: {
    foo: {
      status: 'red',
      current: {
        services: {
          alpha: {
            date: '2016-12-05T13:00:00.000Z',
            status: 'red'
          },
          beta: {
            date: '2016-12-05T11:00:00.000Z',
            status: 'green'
          }
        }
      },
      previous: {
        services: {
          alpha: {
            date: '2016-12-05T12:00:00.000Z',
            status: 'green'
          }
        }
      }
    }
  }
}
```

GET /healthcheck?mode=current
```
{
  status: 'red',
  statuses: {
    foo: {
      status: 'red',
      current: {
        services: {
          alpha: {
            date: '2016-12-05T13:00:00.000Z',
            status: 'red'
          },
          beta: {
            date: '2016-12-05T11:00:00.000Z',
            status: 'green'
          }
        }
      }     
    }
  }
}
```

GET /healthcheck?mode=previous
```
{
  status: 'red',
  statuses: {
    foo: {
      status: 'red',
      previous: {
        services: {
          alpha: {
            date: '2016-12-05T12:00:00.000Z',
            status: 'green'
          }
        }
      }
    }
  }
}
```