import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Turbin3AnchorNftStaking } from "../target/types/turbin3_anchor_nft_staking";

describe("turbin3-anchor-nft-staking", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.turbin3AnchorNftStaking as Program<Turbin3AnchorNftStaking>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
