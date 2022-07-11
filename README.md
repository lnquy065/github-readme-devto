<p align="center">
<img width="120px" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" />
</p>

<p >
    <h2 align="center">Dev.to x Github README</h2>
    <p align="center">
<em >Show your latest dev.to articles</em>
</p>

<p align="center">
<img width="500px" src="https://raw.githubusercontent.com/lnquy065/github-readme-devto/main/readme/pic-1.png" />
</p>



## Usage

`https://dev.to/<USER_NAME>`

```
## Dev.to articles

[![<USER_NAME>'s articles](https://github-readme-devto.herokuapp.com?username=<USER_NAME>)](https://dev.to/<USER_NAME>)
```

## Parameters

| Name          | Description                                                                                           | Default value |
|---------------|-------------------------------------------------------------------------------------------------------|---------------|
| username      | Dev.to username                                                                                       | _required_    |
| fontSize      | Article title font size                                                                               | 16            |
| textColor     | Text color, use hex value (without #)                                                                 | 58a6ff        |
| width         | SVG's width                                                                                           | 500           |
| page          | Pagination page                                                                                       | 1             |
| per_page      | Page size (the number of items to return per page)                                                    | 30            |
| tag           | Retrieve articles that contain the requested tag. Example: `tag=discuss`                              | _none_        |
| tags          | Retrieve articles with any of the comma-separated tags. Example: `tags=javascript, css`               | _none_        |
| tags_exclude  | Retrieve articles that do not contain any of comma-separated tags. Example: `tags_exclude=node, java` | _none_        |
| state         | Allow the client to check which articles are fresh or rising. Enum: "fresh" "rising" "all"            | _none_        |
| top           | Allow the client to return the most popular articles in the last N days. Example: `top=2`             | _none_           |
| collection_id | Return the list of articles belonging to the requested collection. Example: `collection_id=99`                          | _none_           |

## License

MIT © [lnquy065](https://github.com/lnquy065)
