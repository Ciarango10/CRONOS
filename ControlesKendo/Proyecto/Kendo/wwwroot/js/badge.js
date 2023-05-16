$("#toolbar").kendoToolBar({
    items: [
        { template: '<a role="button" class="k-button k-button-solid-base k-button-solid k-button-md k-rounded-md" href="#"><span class="k-button-icon k-icon k-i-user"></span> <span id="badge-overlay">2</span></a>' },
        { template: '<a role="button" class="k-button k-button-solid-base k-button-solid k-button-md k-rounded-md" href="#"><span class="k-button-icon k-icon k-i-email"></span> <span id="badge-inbox">5</span></a>' },
        { template: '<a role="button" class="k-button k-button-solid-base k-button-solid k-button-md k-rounded-md" href="#">See later <span id="badge-sent">15</span></a>' },
        { template: '<a role="button" class="k-button k-button-solid-base k-button-solid k-button-md k-rounded-md" href="#">News <span id="badge-missed">99+</span></a>' }
    ]
});

$('#badge-overlay').kendoBadge({
    themeColor: 'primary',
    rounded: 'small'
});

$('#badge-inbox').kendoBadge({
    themeColor: 'info',
    rounded: 'medium'
});

$('#badge-sent').kendoBadge({
    themeColor: 'success',
    rounded: 'full'
});

$('#badge-missed').kendoBadge({
    themeColor: 'warning',
    rounded: 'large'
});

