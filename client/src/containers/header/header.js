{{ if .session.id }}
    <div class="data"
      data-session="{{ .session.id }}"
      data-session-username="{{ .session.username }}"
    ></div>
  {{ end }}

  {{ if .session.id }}

    <div class="header_loggedin">
      <div class="left">
        <a href="/">Home</a>
        <a href="/explore">Explore</a>
        <a href="/create_post">New Post</a>
        <a href="/deactivate">Deactivate</a>
      </div>
      <div class="right">
        <a href="/edit_profile">Edit Profile</a>
        <a href="/profile/{{ .session.id }}">Profile</a>
        <a href="/logout">Logout</a>
      </div>
    </div>

  {{ else }}

    <div class="index_header">
      <div class="right">
        <a href="/welcome">Home</a>
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
      </div>
    </div>