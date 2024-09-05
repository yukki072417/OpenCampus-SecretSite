// You must not rewriting code in this js file.

function showPass() {
    let showingPassIconPath = 'assets/icons/passwordShowing.png'
    let hidingPassIconPath = 'assets/icons/passwordHiding.png'

    const $icon = $('.show-pass');
    const currentType = $('#user-password').attr('type');

    if (currentType === 'password') {
        $('#user-password').attr('type', 'text');
        $icon.attr('src', showingPassIconPath);
    } else {
        $('#user-password').attr('type', 'password');
        $icon.attr('src', hidingPassIconPath);
    }

}
