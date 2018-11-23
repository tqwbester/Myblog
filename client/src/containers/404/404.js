export default () => 
<div class="notes_wrapper">
  <div class="welcome_div error_div">
    <div class="error_info">
      <span>Oops, the page you're looking for does not exist!!</span>
    </div>
    <img src="/images/error-3.svg" alt="">
    <div class="error_bottom">
      {{ if .session.id }}
        <a href="/profile/{{ .session.id }}" class="sec_btn">Visit your profile</a>
        <a href="/" class="pri_btn error_login">Try going to home</a>
      {{ else }}
        <a href="/welcome" class="sec_btn">Go to home</a>
        <a href="/login" class="pri_btn error_login">Wanna login?</a>
      {{ end }}
    </div>
  </div>
</div>