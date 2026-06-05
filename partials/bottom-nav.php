<?php $cc = $ccCurrent ?? ''; ?>
<div id="animated-example" class="<?= isset($ccBarClass) ? $ccBarClass : 'bottom-bar animated row' ?>">
    <div class="header-bar"></div>
    <div id="aboutCard" class="slim-card darkBackground col-lg-4 col-md-4 col-sm-4 col-4"><a <?= $cc === 'about' ? 'aria-current="page" class="" ' : '' ?>href="https://<?php echo DOMAIN; ?>/about">
        <div class="no-padding container">
            <h2>About</h2>
        </div>
    </a></div>
    <div id="workCard" class="slim-card darkBackground col-lg-4 col-md-4 col-sm-4 col-4"><a <?= $cc === 'work' ? 'aria-current="page" class="" ' : '' ?>href="https://<?php echo DOMAIN; ?>/work">
        <div class="no-padding container">
            <h2>Work</h2>
        </div>
    </a></div>
    <div id="contactCard" class="slim-card darkBackground col-lg-4 col-md-4 col-sm-4 col-4"><a <?= $cc === 'contact' ? 'aria-current="page" class="" ' : '' ?>href="https://<?php echo DOMAIN; ?>/contact">
        <div class="no-padding container">
            <h2>Contact</h2>
        </div>
    </a></div>
</div>
