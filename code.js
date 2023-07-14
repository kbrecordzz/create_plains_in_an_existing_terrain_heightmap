// If i don't misremember, base is the height you want the plains to be at
if (heightmap[fi1][fj1][fi][fj] < base)
{
        heightmap[fi1][fj1][fi][fj] = base+heightmap[fi1][fj1][fi][fj]*0.5;

        // these many lines is for the transition between terrain_make_plains and mountains, and so it all feels natural, i think
        if (heightmap[fi1][fj1][fi][fj]-base > 0.5) heightmap[fi1][fj1][fi][fj] = base+(heightmap[fi1][fj1][fi][fj]-base)*0.05;
        else if (heightmap[fi1][fj1][fi][fj]-base > 1) heightmap[fi1][fj1][fi][fj] = base+(heightmap[fi1][fj1][fi][fj]-base)*0.1;
        else if (heightmap[fi1][fj1][fi][fj]-base > 1.5) heightmap[fi1][fj1][fi][fj] = base+(heightmap[fi1][fj1][fi][fj]-base)*0.15;
        else if (heightmap[fi1][fj1][fi][fj]-base > 2) heightmap[fi1][fj1][fi][fj] = base+(heightmap[fi1][fj1][fi][fj]-base)*0.2;
        else if (heightmap[fi1][fj1][fi][fj]-base > 2.5) heightmap[fi1][fj1][fi][fj] = base+(heightmap[fi1][fj1][fi][fj]-base)*0.25;
        else if (heightmap[fi1][fj1][fi][fj]-base > 3) heightmap[fi1][fj1][fi][fj] = base+(heightmap[fi1][fj1][fi][fj]-base)*0.3;
        else if (heightmap[fi1][fj1][fi][fj]-base > 3.5) heightmap[fi1][fj1][fi][fj] = base+(heightmap[fi1][fj1][fi][fj]-base)*0.35;
        else if (heightmap[fi1][fj1][fi][fj]-base > 4) heightmap[fi1][fj1][fi][fj] = base+(heightmap[fi1][fj1][fi][fj]-base)*0.4;
        else if (heightmap[fi1][fj1][fi][fj]-base > 4.5) heightmap[fi1][fj1][fi][fj] = base+(heightmap[fi1][fj1][fi][fj]-base)*0.45;
        else if (heightmap[fi1][fj1][fi][fj]-base > 5) heightmap[fi1][fj1][fi][fj] = base+(heightmap[fi1][fj1][fi][fj]-base)*0.5;
}
