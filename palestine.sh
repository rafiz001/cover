#!/bin/zsh

# ANSI True Colors (RGB)
RED='\e[48;2;206;17;38m  \e[0m'     # Palestine red
BLACK='\e[48;2;0;0;0m  \e[0m'       # Black stripe
WHITE='\e[48;2;255;255;255m  \e[0m' # White stripe
GREEN='\e[48;2;0;155;72m  \e[0m'    # Palestine green
RESET='\e[0m'

# Flag dimensions
STRIPE_HEIGHT=3       # Rows per stripe (total height = 9)
TRIANGLE_MAX_WIDTH=5  # Base width of red triangle
FLAG_WIDTH=24         # Total width (triangle + stripes)

# Function to print a single row
print_row() {
    local row=$1
    local stripe=$(( (row - 1) / STRIPE_HEIGHT ))  # 0=black, 1=white, 2=green
    local tri_width=$(( row <= TRIANGLE_MAX_WIDTH ? row * 2 : TRIANGLE_MAX_WIDTH * 2 - (row - TRIANGLE_MAX_WIDTH) * 2 ))

    # Red triangle (left)
    for ((i=0; i<tri_width && i<FLAG_WIDTH; i++)); do
        echo -ne "$RED"
    done

    # Stripe (black/white/green)
    for ((i=tri_width; i<FLAG_WIDTH; i++)); do
        case $stripe in
            0) echo -ne "$BLACK" ;;
            1) echo -ne "$WHITE" ;;
            2) echo -ne "$GREEN" ;;
        esac
    done
    echo
}

# Print the flag
for ((row=1; row<=$(( STRIPE_HEIGHT * 3 )); row++)); do
    print_row $row
done
echo -e "$RESET"
echo "\tFree Palestine"