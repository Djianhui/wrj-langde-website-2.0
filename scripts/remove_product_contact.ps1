$utf8 = New-Object System.Text.UTF8Encoding $false
$dir = "d:\demo\wrj\src\views\products"
$files = Get-ChildItem -Path $dir -Filter "*.vue"
# Match: blank line + comment <!-- ... --> + <div class="product-contact"> ... </div></div>
# Use ASCII-only pattern to avoid PS5 encoding issues
$pattern = '(?s)\r?\n\s*<!--[^>]*-->\s*\r?\n\s*<div class="product-contact">.*?</div>\s*\r?\n\s*</div>'
$count = 0
foreach ($f in $files) {
    $c = [System.IO.File]::ReadAllText($f.FullName, $utf8)
    $new = [regex]::Replace($c, $pattern, "")
    if ($new -ne $c) {
        [System.IO.File]::WriteAllText($f.FullName, $new, $utf8)
        $count++
        Write-Host "Updated: $($f.Name)"
    } else {
        Write-Host "SKIP (no match): $($f.Name)"
    }
}
Write-Host "Total updated: $count / $($files.Count)"
